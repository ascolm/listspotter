const baseUrl = 'https://accounts.spotify.com/authorize';
const { clientId, redirectUri } = require('config');

interface QueryParams {
  client_id: string,
  response_type: string,
  redirect_uri: string,
  scope: string
}

const queryParams: QueryParams = {
  client_id: clientId,
  response_type: 'code',
  redirect_uri: redirectUri,
  scope: 'user-library-read user-follow-read user-follow-modify playlist-modify-public'
}

function buildQueryUrl (url: string, params: QueryParams) : string {
  return `${baseUrl}?client_id=${params.client_id}&response_type=${params.response_type}&redirect_uri=${params.redirect_uri}&scope=${encodeURIComponent(queryParams.scope)}`;
}

const queryUrl = buildQueryUrl(baseUrl, queryParams);

export {queryUrl};