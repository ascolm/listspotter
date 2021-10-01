'use strict';

const modeller = require('../modeller/modeller');
const { requestWhileQueued } = require('./controller-helpers');

const baseUrl = 'https://api.spotify.com/v1';
const spotifyTracksUrl = baseUrl + '/me/tracks';
const spotifyArtistsUrl = baseUrl + '/me/following';
const spotifySpecifiedArtistsUrl = baseUrl + '/artists';
const spotifyUserUrl = baseUrl + '/me';
const spotifyCreatePlaylistUrl = baseUrl + '/users';
const spotifyPlaylistUrl = baseUrl + '/playlists';
const triesBeforeError = 10;
const saveTrackRequestLimit = 100; // max number of tracks allowed in a single "save tracks to playlist" request in spotify
const offsetIncrement = 50; // max number of tracks allowed in a single "get saved tracks" request in spotify
const specifiedArtistRequestLimit = 50; // max number of tracks allowed in a single "get saved tracks" request in spotify
const msBetweenRequests = 250; // used for track requests and specified artist requests

exports.getTokens = async (req, res, next) => {
  const { code } = req.body;
  const tokens = await modeller.requestToken(code, next);
  res.status(200).send(tokens);
};

function timeOutPromise () {
  return new Promise((resolve) => setTimeout(() => resolve(), msBetweenRequests));
};

exports.getTracks = async (req, res) => {
  const {clientToken} = req.body;
  let initialOffset = 0;
  let trackData = [];

  let tryCount = 0;

  async function fetchTracksAsync (offset) {
    let trackBufferResponse;

    try{
      trackBufferResponse = await modeller.requestTracks(spotifyTracksUrl, clientToken, offset);
    } catch (err) {
      if(err.response.status === 404){
        tryCount++;
        await timeOutPromise();
        if (tryCount < triesBeforeError) {
          await fetchTracksAsync (offset);
        } else {
          console.log(err);
        }
        return;
      }
    }

    trackData = [...trackData, ...trackBufferResponse.data.items];

    if (trackBufferResponse.data.next) {
      offset += offsetIncrement;
      await fetchTracksAsync (offset)
    }
  };

  try {
    await fetchTracksAsync(initialOffset);
    res.status = 200;
    res.send(trackData);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getArtists = async (req, res) => {
  const {clientToken, nextUrl} = req.body;

  modeller.requestArtists(spotifyArtistsUrl, nextUrl, clientToken)
    .then((artistResponse) => {
      res.statusCode = 200;
      res.send(artistResponse.data);
    })
    .catch((err) => console.log(err.response.data));
};

exports.getSpecifiedArtists = async (req, res) => {
  const {clientToken, artistIds} = req.body;

  const specifiedArtists = [];

  while (artistIds.length > 0) {
    const artistsToQuery = artistIds.splice(0, specifiedArtistRequestLimit);
    const queryString = artistsToQuery.join(',');

    let tryCount = 0;
    await (async function fetchSpecifiedArtistsAsync () {
      try{
        const specifiedArtistResponse = await modeller.requestSpecifiedArtists(spotifySpecifiedArtistsUrl, queryString, clientToken);
        specifiedArtists.push(specifiedArtistResponse.data.artists);
      } catch (err) {
        if(err.response.status === 404){
          tryCount++;
          await timeOutPromise();
          if (tryCount < triesBeforeError) {
            await fetchSpecifiedArtistsAsync();
          } else {
            console.log(err);
          }
          return;
        }
      }
    })();
  }

  res.status = 200;
  res.send(specifiedArtists);
}

exports.getPlaylistCover = async (req, res, next) => {
  const {clientToken, playlistId} = req.body;

  modeller.requestPlaylistCover(spotifyPlaylistUrl, playlistId, clientToken)
    .then((coverResponse) => {
      res.statusCode = 200;
      res.send(coverResponse.data);
    })
    .catch((err) => console.log(err.response.data));
};


exports.createPlaylist = async (req, res, next) => {
  const {clientToken, playlistName, trackURIs} = req.body;

  const userResponse = await modeller.requestUser(spotifyUserUrl, clientToken);
  const userID = userResponse.data.id;

  const createPlaylistResponse = await modeller.requestCreatePlaylist(spotifyCreatePlaylistUrl, playlistName, userID, clientToken);
  const playlistData = createPlaylistResponse.data;

  function addTracks (trackArr) {
    return modeller.requestAddTracks(spotifyPlaylistUrl, playlistData.id, trackArr, clientToken);
  }

  // Spotify has a track limit per request, so below we check if multiple requests are necessary (TrackQueue is all the tracks to be added in a queue form, with multiple tracks "shifting" per request.)
  requestWhileQueued(trackURIs, saveTrackRequestLimit, addTracks);

  res.status(200);
  res.send(JSON.stringify(playlistData));
};