require('dotenv').config();

const inProduction = process.env.NODE_ENV === 'production';

module.exports = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.PORT || process.env.SERVER_PORT,
  redirectUri: inProduction ? process.env.REDIRECT_URI : process.env.REDIRECT_URI_LOCAL,
  spotifyTokenUrl: process.env.SPOTIFY_TOKEN_URL
};