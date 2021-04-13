require('dotenv').config();

module.exports = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.SERVER_PORT,
  redirectUri: process.env.REDIRECT_URI,
  spotifyTokenUrl: process.env.SPOTIFY_TOKEN_URL
};