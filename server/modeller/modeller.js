const axios = require('axios');
const { clientID, clientSecret, redirectUri, spotifyTokenUrl } = require('../config');

exports.requestToken = (code) => {
  return axios.request({
    method: 'POST',
    url: spotifyTokenUrl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`
  })
    .then((tokenResponse) => {
      return tokenResponse.data;
    })
    .catch((err) => console.log(err));
};

exports.requestTracks = (spotifyTracksUrl, tokens, offset) => {
  return axios.request({
    method: 'GET',
    url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
};

exports.requestArtists = (spotifyArtistsUrl, nextUrl, tokens) => {
  return axios.request({
    method: 'GET',
    url: nextUrl || spotifyArtistsUrl + '?type=artist&limit=50',
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
};

exports.requestSpecifiedArtists = (spotifySpecifiedArtistsUrl, queryString, tokens) => {
  return axios.request({
    method: 'GET',
    url: spotifySpecifiedArtistsUrl + '?ids=' + queryString,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
};

exports.requestUser = (spotifyUserUrl, tokens) => {
  return axios.request({
    method: 'GET',
    url: spotifyUserUrl,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
};

exports.requestPlaylistCover = (spotifyPlaylistUrl, playlistId, tokens) => {
  return axios.request({
    method: 'GET',
    url: spotifyPlaylistUrl + `/${playlistId}/images`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
  });
};

exports.requestCreatePlaylist = (spotifyCreatePlaylistUrl, playlistName, userID, tokens) => {
  return axios.request({
    method: 'POST',
    url: spotifyCreatePlaylistUrl + `/${userID}/playlists`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json'
    },
    data: {name: playlistName}
  });
};

exports.requestAddTracks = (spotifySaveTracksUrl, playlistID, trackArr, tokens) => {
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
};