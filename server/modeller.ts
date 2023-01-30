import axios from 'axios';
import { clientID, clientSecret, redirectUri, spotifyTokenUrl } from 'server/config';

type Tokens = {access_token: string}

export const requestToken = (code: string) => {
  return axios.request({
    method: 'POST',
    url: spotifyTokenUrl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`
  })
};

export const requestTracks = (spotifyTracksUrl: string, tokens: Tokens, offset: number) => {
  return axios.request({
    method: 'GET',
    url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
};

export const requestArtists = (spotifyArtistsUrl: string, nextUrl: string, tokens: Tokens) => {
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

export const requestSpecifiedArtists = (spotifySpecifiedArtistsUrl: string, queryString: string, tokens: Tokens) => {
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

export const requestUser = (spotifyUserUrl: string, tokens: Tokens) => {
  return axios.request({
    method: 'GET',
    url: spotifyUserUrl,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
};

export const requestPlaylistCover = (spotifyPlaylistUrl: string, playlistId: string, tokens: Tokens) => {
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

export const requestCreatePlaylist = (spotifyCreatePlaylistUrl: string, playlistName: string, userID: string, tokens: Tokens) => {
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

export const requestAddTracks = (spotifySaveTracksUrl: string, playlistID: string, trackArr: any[], tokens: Tokens) => {
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
