const baseUrl = require('config').serverBaseUrl;

let clientToken: string | null = null;

// SERVER SHOULD SEND BACK THE TOKEN IN REPLY
export const getToken = async (code: string) => {
  let response = await fetch(baseUrl + '/tokens', {
    method: 'POST',
    body: JSON.stringify({code}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  clientToken = await response.json();
};

export const getTracks = async () => {
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

export const createPlaylist = async (playlistName: string, trackURIs: string[]) => {
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