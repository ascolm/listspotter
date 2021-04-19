require('dotenv').config();

const inProduction = process.env.NODE_ENV === 'production';

module.exports = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: inProduction ? process.env.REACT_APP_REDIRECT_URI : process.env.REACT_APP_REDIRECT_URI_LOCAL,
  serverBaseUrl: inProduction ? process.env.REACT_APP_SERVER_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL_LOCAL
};