const inProduction = process.env.NODE_ENV === 'production';

module.exports = {
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirectUri: inProduction ? process.env.NEXT_PUBLIC_REDIRECT_URI : process.env.NEXT_PUBLIC_REDIRECT_URI_LOCAL,
  serverBaseUrl: inProduction ? process.env.NEXT_PUBLIC_SERVER_BASE_URL : process.env.NEXT_PUBLIC_SERVER_BASE_URL_LOCAL
};