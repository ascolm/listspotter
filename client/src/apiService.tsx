const baseUrl = 'http://localhost:3001'

export const getTokens = async (code: string) => {
  return fetch(baseUrl + '/tokens', {
    method: 'POST',
    body: JSON.stringify({code}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getTracks = async (code: string, offset: number) => {
  const response = await fetch(baseUrl + '/tracks', {
    method: 'POST',
    body: JSON.stringify({code, offset}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const tracks = await response.json();
  return tracks;
};

export const getArtists = async (code: string, nextUrl: string | undefined) => {
  const response = await fetch(baseUrl + '/artists', {
    method: 'POST',
    body: JSON.stringify({code, nextUrl}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const artists = await response.json();
  return artists;
};