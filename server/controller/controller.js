const axios = require('axios');
const getTokens = require('./getTokens');

const baseUrl = 'https://api.spotify.com/v1';
const spotifyTracksUrl = baseUrl + '/me/tracks';
const spotifyArtistsUrl = baseUrl + '/me/following';
const spotifyUserUrl = baseUrl + '/me';
const spotifyCreatePlaylistUrl = baseUrl + '/users'
const spotifySaveTracksUrl = baseUrl + '/playlists';
const tokenValidForMs = 1000 * 60 * 60 // Token is valid for 1 hour
const saveTrackRequestLimit = 100 // max number of tracks allowed in a single "save tracks to playlist" request

// TODO: TOKEN TO BE PER USER SESSION RATHER THAN ONE FOR THE WHOLE SERVER: GET USER ID AFTER RECEIVING AUTH TOKEN, SAVE AS ID TOKEN PAIR, SEND BACK USER ID TO CLIENT FOR USE IN SUBSEQUENT REQUESTS
let tokens ='';

// TODO: CHECK ERROR HANDLING IN CATCH METHODS // CREATE CUSTOM HANDLER MIDDLEWARE
// TODO: REFACTOR AXIOS REQUESTS INTO MODELLER
// TODO: separate gettokens/checktokens as a middleware to be passed through in each request

exports.getTokens = async (req, res, next) => {
  const { code } = req.body;
  tokens = await getTokens(code, next);
  // setTimeout(() => tokens = '', tokenValidForMs);
  res.sendStatus(200);
};

exports.getTracks = async (req, res, next) => {
  const {code, offset} = req.body;

  if (!tokens) {
    tokens = await getTokens(code, next);
  }

  axios.request({
    method: 'GET',
    url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
  .then((trackResponse) => {
    res.statusCode = 200;
    res.send(trackResponse.data);
  })
  .catch(next);
};

exports.getArtists = async (req, res, next) => {
  const {code, offset, nextUrl} = req.body;

  if (!tokens) {
    tokens = await getTokens(code, next);
  }

  axios.request({
    method: 'GET',
    url: nextUrl || spotifyArtistsUrl + `?type=artist&limit=50`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  .then((artistResponse) => {
    res.statusCode = 200;
    res.send(artistResponse.data);
  })
  .catch((err) => console.log(err.response.data));
};

exports.createPlaylist = async (req, res, next) => {
  const {code, playlistName, trackURIs} = req.body;

  if (!tokens) {
    tokens = await getTokens(code, next);
  }

  const userResponse = await axios.request({
    method: 'GET',
    url: spotifyUserUrl,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
  const userID = userResponse.data.id;
  console.log('userID ', userID);

  const createPlaylistResponse = await axios.request({
    method: 'POST',
    url: spotifyCreatePlaylistUrl + `/${userID}/playlists`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json'
    },
    data: {name: playlistName}
  });
  const playlistID = createPlaylistResponse.data.id;
  console.log('playlistID ', playlistID);

  function addTracks (trackArr) {
    return axios.request({
      method: 'POST',
      url: spotifySaveTracksUrl + `/${playlistID}/tracks`,
      headers: {
        'Authorization': `Bearer ${tokens['access_token']}`,
        'Content-Type': 'application/json'
      },
      data: {
        uris: trackArr
      }
    });
  }

  let trackQueue = trackURIs.slice();

  while (trackQueue.length > 0) {
    if (trackQueue.length < saveTrackRequestLimit) {
      await addTracks(trackQueue);
      trackQueue = [];
    } else {
      tracksToQuery = trackQueue.splice(0, saveTrackRequestLimit);
      await addTracks(tracksToQuery);
    }
  }

  res.status(200);
  res.send(JSON.stringify(playlistID));
};