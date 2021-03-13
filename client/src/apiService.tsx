const baseUrl = 'http://localhost:3001';

export const getTokens = async (code: string) => {
    return fetch(baseUrl + '/tokens', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getTracks = async (code: string) => {
    const response = await fetch(baseUrl + '/tracks', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};

export const getArtists = async (code: string, nextUrl: string | undefined) => {
    // TODO: CACHE IMAGES

    const response = await fetch(baseUrl + '/artists', {
        method: 'POST',
        body: JSON.stringify({ code, nextUrl }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const artists = await response.json();
    return artists;
};

export const createPlaylist = async (
    code: string,
    playlistName: string,
    trackURIs: string[]
) => {
    const response = await fetch(baseUrl + '/create', {
        method: 'POST',
        body: JSON.stringify({ code, playlistName, trackURIs }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const playlistData = await response.json();
    return playlistData;
};

export const getPlaylistCover = async (code: string, playlistId: string) => {
    const response = await fetch(baseUrl + '/cover', {
        method: 'POST',
        body: JSON.stringify({ code, playlistId }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const playlistData = await response.json();
    return playlistData;
};
