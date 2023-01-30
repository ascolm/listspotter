import { playlistMock, specifiedArtists, tracksMock } from "dataMocks";
import { serverBaseUrl as baseUrl } from "./config";

let clientToken: string | null = null;

const withStatusHandling = async (fetchCb: () => Promise<Response>) => {
  if (!clientToken) throw new Error;

  const response = await fetchCb();
  if (response.ok) {
    return await response.json();
  }

  throw new Error;
}

export const getToken = async (code: string) => {
  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    clientToken = '123';
    return;
  }

  let response;
  try {
    response = await fetch(baseUrl + '/tokens', {
      method: 'POST',
      body: JSON.stringify({code}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.log(err);
  }

  if (response?.ok) {
    clientToken = await response.json();
    return;
  }

  throw new Error;
};

export const getTracks = async (offset: number) => {
  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    await new Promise(res => setTimeout(() => res(''), 2000));
    return tracksMock;
  } 
  
  return withStatusHandling(() => 
    fetch(baseUrl + '/tracks', {
      method: 'POST',
      body: JSON.stringify({clientToken, offset}),
      headers: {
        'Content-Type': 'application/json'
      }
    }))
};

export const getArtists = (nextUrl: string | undefined) => 
  withStatusHandling(() => 
    fetch(
      baseUrl + '/artists', {
      method: 'POST',
      body: JSON.stringify({clientToken, nextUrl}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )

export const getSpecifiedArtists = async (artistIds: string[]) => {
  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    await new Promise(res => setTimeout(() => res(''), 2000));
    return specifiedArtists.artists;
  }

  return withStatusHandling(() => 
    fetch(baseUrl + '/specified_artists', {
      method: 'POST',
      body: JSON.stringify({clientToken, artistIds}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )
};

export const createPlaylist = async (playlistName: string, trackURIs: string[]) => {
  if (process.env.NEXT_PUBLIC_ENV === 'development') return playlistMock;

  return withStatusHandling(() => 
    fetch(baseUrl + '/create', {
      method: 'POST',
      body: JSON.stringify({clientToken, playlistName, trackURIs}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )
};

export const getPlaylistCover = async (playlistId: string) => {
  if (process.env.NEXT_PUBLIC_ENV === 'development') return playlistMock.cover?.url;

  return withStatusHandling(() => 
    fetch(baseUrl + '/cover', {
      method: 'POST',
      body: JSON.stringify({clientToken, playlistId}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )
};