const inProduction = process.env.NODE_ENV === 'production';

export const clientID = process.env.CLIENT_ID;
export const clientSecret = process.env.CLIENT_SECRET;
export const redirectUri = inProduction ? process.env.REDIRECT_URI : process.env.REDIRECT_URI_LOCAL;
export const spotifyTokenUrl = process.env.SPOTIFY_TOKEN_URL;
export const spotifyBaseUrl = process.env.SPOTIFY_BASE_URL;