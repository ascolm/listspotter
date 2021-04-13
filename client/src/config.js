require('dotenv').config();

module.exports = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  serverBaseUrl: process.env.REACT_APP_SERVER_BASE_URL
};