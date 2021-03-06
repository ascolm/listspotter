const axios = require('axios');
const modeller = require('../modeller/modeller');
const { requestWhileQueued } = require('./controller-helpers');

const baseUrl = 'https://api.spotify.com/v1';
const spotifyTracksUrl = baseUrl + '/me/tracks';
const spotifyArtistsUrl = baseUrl + '/me/following';
const spotifyUserUrl = baseUrl + '/me';
const spotifyCreatePlaylistUrl = baseUrl + '/users';
const spotifySaveTracksUrl = baseUrl + '/playlists';
const saveTrackRequestLimit = 100; // max number of tracks allowed in a single "save tracks to playlist" request in spotify

// TODO: TOKEN TO BE PER USER SESSION RATHER THAN ONE FOR THE WHOLE SERVER: GET USER ID AFTER RECEIVING AUTH TOKEN, SAVE AS ID TOKEN PAIR, SEND BACK USER ID TO CLIENT FOR USE IN SUBSEQUENT REQUESTS
let tokens ='';

// TODO: CHECK ERROR HANDLING IN CATCH METHODS // CREATE CUSTOM HANDLER MIDDLEWARE
// TODO: REFACTOR AXIOS REQUESTS INTO MODELLER
// TODO: separate gettokens/checktokens part as a middleware to be passed through in each request

exports.getTokens = async (req, res, next) => {
  const { code } = req.body;
  tokens = await modeller.requestToken(code, next);
  res.sendStatus(200);
};

exports.getTracks = async (req, res, next) => {
  const {code, offset} = req.body;

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  modeller.requestTracks(spotifyTracksUrl, tokens, offset)
    .then((trackResponse) => {
      res.statusCode = 200;
      res.send(trackResponse.data);
    })
    .catch(next);
};

exports.getArtists = async (req, res, next) => {
  const {code, offset, nextUrl} = req.body;

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  modeller.requestArtists(spotifyArtistsUrl, nextUrl, tokens)
    .then((artistResponse) => {
      res.statusCode = 200;
      res.send(artistResponse.data);
    })
    .catch((err) => console.log(err.response.data));
};

exports.createPlaylist = async (req, res, next) => {
  const {code, playlistName, trackURIs} = req.body;

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  const userResponse = await modeller.requestUser(spotifyUserUrl, tokens);
  const userID = userResponse.data.id;

  const createPlaylistResponse = await modeller.requestCreatePlaylist(spotifyCreatePlaylistUrl, playlistName, userID, tokens);
  const playlistID = createPlaylistResponse.data.id;

  function addTracks (trackArr) {
    return modeller.requestAddTracks(spotifySaveTracksUrl, playlistID, trackArr, tokens);
  }


  // let trackQueue = trackURIs.slice();
  // while (trackQueue.length > 0) {
  //   if (trackQueue.length < saveTrackRequestLimit) {
  //     await addTracks(trackQueue);
  //     trackQueue = [];
  //   } else {
  //     let tracksToQuery = trackQueue.splice(0, saveTrackRequestLimit);
  //     await addTracks(tracksToQuery);
  //   }
  // }


  // Spotify has a track limit per request, so below we check if multiple requests are necessary (TrackQueue is all the tracks to be added in a queue form, with multiple tracks "shifting" per request.)
  requestWhileQueued(trackURIs, saveTrackRequestLimit, addTracks);

  res.status(200);
  res.send(JSON.stringify(playlistID));
};