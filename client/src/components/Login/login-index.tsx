import * as React from 'react';
// import { useState, useEffect } from 'react';

// TODO: MOVE OUT
const baseUrl = 'https://accounts.spotify.com/authorize';

interface QueryParams {
  client_id: string,
  response_type: string,
  redirect_uri: string,
  state: string
}

const queryParams: QueryParams = {
  client_id: 'decae5e905644494a2de08b59116f140',
  response_type: 'code',
  redirect_uri: 'http://localhost:3000/main',
  state: 'bayburt'
}

function buildQueryUrl (url: string, params: QueryParams) : string {
  return `${baseUrl}?client_id=${params.client_id}&response_type=${params.response_type}&redirect_uri=${params.redirect_uri}&state=${params.state}`;
}
// /TODO


export interface Props {
}

const Login: React.FC<Props> = () => {
  return (
    <div>
      <h1>This is the login page canım.</h1>
      <a href={buildQueryUrl(baseUrl, queryParams)}>LOGIN</a>
    </div>
   );
}

export default Login;