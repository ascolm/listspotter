import axios from "axios";
import { renderSync } from "node-sass";
import modeller from "../modeller/modeller";
import { requestWhileQueued } from "./controller-helpers";

const baseUrl = "https://api.spotify.com/v1";
const spotifyTracksUrl = baseUrl + "/me/tracks";
const spotifyArtistsUrl = baseUrl + "/me/following";
const spotifyUserUrl = baseUrl + "/me";
const spotifyCreatePlaylistUrl = baseUrl + "/users";
const spotifyPlaylistUrl = baseUrl + "/playlists";
const saveTrackRequestLimit = 100; // max number of tracks allowed in a single "save tracks to playlist" request in spotify
const offsetIncrement = 50; // max number of tracks allowed in a single "get saved tracks" request in spotify
const msBetweenTrackRequests = 250;

// TODO: TOKEN TO BE PER USER SESSION RATHER THAN ONE FOR THE WHOLE SERVER: GET USER ID AFTER RECEIVING AUTH TOKEN, SAVE AS ID TOKEN PAIR, SEND BACK USER ID TO CLIENT FOR USE IN SUBSEQUENT REQUESTS
let tokens = "";

// TODO: CHECK ERROR HANDLING IN CATCH METHODS // CREATE CUSTOM HANDLER MIDDLEWARE
// TODO: REFACTOR AXIOS REQUESTS INTO MODELLER
// TODO: separate gettokens/checktokens part as a middleware to be passed through in each request

exports.getTokens = async (req, res, next) => {
  const { code } = req.body;
  tokens = await modeller.requestToken(code, next);
  res.sendStatus(200);
};

exports.getTracks = async (req, res, next) => {
  const { code } = req.body;
  let initialOffset = 0;
  let trackData = [];

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  function timeOutPromise() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(), msBetweenTrackRequests)
    );
  }

  async function fetchTracksAsync(offset) {
    let trackBufferResponse;

    try {
      trackBufferResponse = await modeller.requestTracks(
        spotifyTracksUrl,
        tokens,
        offset
      );
    } catch (err) {
      console.log("inner error 😎");
      console.log(err.response.status); // 404
      if (err.response.status === 404) {
        await timeOutPromise();
        await fetchTracksAsync(offset);
        return;
      }
    }

    trackData = [...trackData, ...trackBufferResponse.data.items];

    console.log("received tracks for offset:", offset);
    if (trackBufferResponse.data.next) {
      offset += offsetIncrement;
      await fetchTracksAsync(offset);
    }
  }

  try {
    await fetchTracksAsync(initialOffset);
    console.log("sending " + trackData.length + " tracks");
    res.status = 200;
    res.send(trackData);
  } catch (err) {
    console.log("outer error 😎");
    console.log("something went wrong while fetching tracks");
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getArtists = async (req, res, next) => {
  const { code, offset, nextUrl } = req.body;

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  modeller
    .requestArtists(spotifyArtistsUrl, nextUrl, tokens)
    .then((artistResponse) => {
      res.statusCode = 200;
      res.send(artistResponse.data);
    })
    .catch((err) => console.log(err.response.data));
};

exports.getPlaylistCover = async (req, res, next) => {
  const { code, playlistId } = req.body;

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  modeller
    .requestPlaylistCover(spotifyPlaylistUrl, playlistId, tokens)
    .then((coverResponse) => {
      res.statusCode = 200;
      console.log(coverResponse);
      res.send(coverResponse.data);
    })
    .catch((err) => console.log(err.response.data));
};

exports.createPlaylist = async (req, res, next) => {
  const { code, playlistName, trackURIs } = req.body;

  if (!tokens) {
    tokens = await modeller.requestToken(code, next);
  }

  const userResponse = await modeller.requestUser(spotifyUserUrl, tokens);
  const userID = userResponse.data.id;

  const createPlaylistResponse = await modeller.requestCreatePlaylist(
    spotifyCreatePlaylistUrl,
    playlistName,
    userID,
    tokens
  );
  const playlistData = createPlaylistResponse.data;

  function addTracks(trackArr) {
    return modeller.requestAddTracks(
      spotifyPlaylistUrl,
      playlistData.id,
      trackArr,
      tokens
    );
  }

  // Spotify has a track limit per request, so below we check if multiple requests are necessary (TrackQueue is all the tracks to be added in a queue form, with multiple tracks "shifting" per request.)
  requestWhileQueued(trackURIs, saveTrackRequestLimit, addTracks);

  res.status(200);
  res.send(JSON.stringify(playlistData));
};
