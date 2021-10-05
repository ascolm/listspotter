import { playlistMock, specifiedArtists, tracksMock } from "devtools/dataMocks";

const baseUrl = require('config').serverBaseUrl;

let clientToken: string | null = null;

// SERVER SHOULD SEND BACK THE TOKEN IN REPLY
export const getToken = async (code: string) => {
  if (process.env.REACT_APP_ENV === 'development') {
    clientToken = '123';
    return;
  }

  try {
    let response = await fetch(baseUrl + '/tokens', {
      method: 'POST',
      body: JSON.stringify({code}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    clientToken = await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getTracks = async () => {
  if (process.env.REACT_APP_ENV === 'development') return tracksMock;
  if (!clientToken) return;

  const response = await fetch(baseUrl + '/tracks', {
    method: 'POST',
    body: JSON.stringify({clientToken}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};

export const getArtists = async (nextUrl: string | undefined) => {
  if (!clientToken) return;

  const response = await fetch(baseUrl + '/artists', {
    method: 'POST',
    body: JSON.stringify({clientToken, nextUrl}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const artists = await response.json();
  return artists;
};

export const getSpecifiedArtists = async (artistIds: string[]) => {
  if (!clientToken) return;
  if (process.env.REACT_APP_ENV === 'development') {
    await new Promise(res => setTimeout(() => res(''), 3000));
    return specifiedArtists.artists;
  }

  try {
    const response = await fetch(baseUrl + '/specified_artists', {
      method: 'POST',
      body: JSON.stringify({clientToken, artistIds}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const artists = await response.json();
    return artists;
  } catch (err) {
    console.log(err);
  }
};

export const createPlaylist = async (playlistName: string, trackURIs: string[]) => {
  if (process.env.REACT_APP_ENV === 'development') return playlistMock;
  if (!clientToken) return;

  const response = await fetch(baseUrl + '/create', {
    method: 'POST',
    body: JSON.stringify({clientToken, playlistName, trackURIs}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const playlistData = await response.json();
  return playlistData;
};

export const getPlaylistCover = async (playlistId: string) => {
  if (process.env.REACT_APP_ENV === 'development') return playlistMock.cover?.url;
  if (!clientToken) return;

  const response = await fetch(baseUrl + '/cover', {
    method: 'POST',
    body: JSON.stringify({clientToken, playlistId}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const playlistData = await response.json();
  return playlistData;
};