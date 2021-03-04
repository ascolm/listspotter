const axios = require('axios');
const { clientID, clientSecret } = require('../config');
const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
const redirectUri = 'http://localhost:3000/main';

module.exports = (code, next) => {
  return axios.request({
    method: 'POST',
    url: spotifyTokenUrl,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`
  })
  .then((tokenResponse) => {
    console.log('tokenresponse in gettokens:')
    console.log(tokenResponse.data);
    return tokenResponse.data;
  })
  .catch(next);
}