import axios from "axios";
import { clientID, clientSecret } from "../config";
const spotifyTokenUrl = "https://accounts.spotify.com/api/token";
const redirectUri = "http://localhost:3000/main";

// TODO: REFACTOR WITH A REQUEST TEMPLATE
const requestToken = (code, next) => {
  return axios
    .request({
      method: "POST",
      url: spotifyTokenUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`,
    })
    .then((tokenResponse) => {
      return tokenResponse.data;
    })
    .catch(next);
};

const requestTracks = (spotifyTracksUrl, tokens, offset) => {
  return axios.request({
    method: "GET",
    url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const requestArtists = (spotifyArtistsUrl, nextUrl, tokens) => {
  return axios.request({
    method: "GET",
    url: nextUrl || spotifyArtistsUrl + "?type=artist&limit=50",
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const requestUser = (spotifyUserUrl, tokens) => {
  return axios.request({
    method: "GET",
    url: spotifyUserUrl,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const requestPlaylistCover = (spotifyPlaylistUrl, playlistId, tokens) => {
  return axios.request({
    method: "GET",
    url: spotifyPlaylistUrl + `/${playlistId}/images`,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const requestCreatePlaylist = (
  spotifyCreatePlaylistUrl,
  playlistName,
  userID,
  tokens
) => {
  return axios.request({
    method: "POST",
    url: spotifyCreatePlaylistUrl + `/${userID}/playlists`,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/json",
    },
    data: { name: playlistName },
  });
};

const requestAddTracks = (
  spotifySaveTracksUrl,
  playlistID,
  trackArr,
  tokens
) => {
  return axios.request({
    method: "POST",
    url: spotifySaveTracksUrl + `/${playlistID}/tracks`,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/json",
    },
    data: {
      uris: trackArr,
    },
  });
};

export default {
  requestToken,
  requestTracks,
  requestArtists,
  requestUser,
  requestPlaylistCover,
  requestCreatePlaylist,
  requestAddTracks,
};
