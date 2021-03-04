const baseUrl = 'https://accounts.spotify.com/authorize';

interface QueryParams {
  client_id: string,
  response_type: string,
  redirect_uri: string,
  state: string,
  scope: string
}

const queryParams: QueryParams = {
  client_id: 'decae5e905644494a2de08b59116f140',
  response_type: 'code',
  redirect_uri: 'http://localhost:3000/main',
  state: 'bayburt',
  scope: 'user-library-read'
}

function buildQueryUrl (url: string, params: QueryParams) : string {
  return `${baseUrl}?client_id=${params.client_id}&response_type=${params.response_type}&redirect_uri=${params.redirect_uri}&scope=${params.scope}&state=${params.state}`;
}

const queryUrl = buildQueryUrl(baseUrl, queryParams);

export {queryUrl};