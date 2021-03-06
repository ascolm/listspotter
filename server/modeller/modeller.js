const axios = require('axios');
const { clientID, clientSecret } = require('../config');
const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
const redirectUri = 'http://localhost:3000/main';


// TODO: REFACTOR WITH A REQUEST TEMPLATE
exports.requestToken = (code, next) => {
  return axios.request({
    method: 'POST',
    url: spotifyTokenUrl,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`
  })
  .then((tokenResponse) => {
    console.log('tokenresponse in gettokens:')
    console.log(tokenResponse.data);
    return tokenResponse.data;
  })
  .catch(next);
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
    url: nextUrl || spotifyArtistsUrl + `?type=artist&limit=50`,
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