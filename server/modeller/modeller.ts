import axios from "axios";
import { clientID, clientSecret } from "../config.js";
const spotifyTokenUrl = "https://accounts.spotify.com/api/token";
const redirectUri = "http://localhost:3000/main";
import { NextFunction } from "express";

// TODO: REFACTOR WITH A REQUEST TEMPLATE
const requestToken = (code: string, next: NextFunction) => {
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

const requestTracks = (
  spotifyTracksUrl: string,
  tokens: any,
  offset: string
) => {
  return axios.request({
    method: "GET",
    url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const requestArtists = (
  spotifyArtistsUrl: string,
  nextUrl: string,
  tokens: any
) => {
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

const requestUser = (spotifyUserUrl: string, tokens: any) => {
  return axios.request({
    method: "GET",
    url: spotifyUserUrl,
    headers: {
      Authorization: `Bearer ${tokens["access_token"]}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const requestPlaylistCover = (
  spotifyPlaylistUrl: string,
  playlistId: string,
  tokens: any
) => {
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
  spotifyCreatePlaylistUrl: string,
  playlistName: string,
  userID: string,
  tokens: any
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
  spotifySaveTracksUrl: string,
  playlistID: string,
  trackArr: string[],
  tokens: any
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
