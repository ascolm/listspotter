const axios = require('axios');
const getTokens = require('./getTokens');

const baseUrl = 'https://api.spotify.com/v1/me';
const spotifyTracksUrl = baseUrl + '/tracks';
const spotifyArtistsUrl = baseUrl + '/following';
const tokenValidForMs = 1000 * 60 * 60 // Token is valid for 1 hour


let tokens ='';

// TODO: CHECK ERROR HANDLING IN CATCH METHODS // CREATE CUSTOM HANDLER MIDDLEWARE
// TODO: REFACTOR AXIOS REQUESTS INTO MODELLER
// TODO: separate gettokens/checktokens as a middleware to be passed through in each request

exports.getTokens = async (req, res, next) => {
  const { code } = req.body;
  tokens = await getTokens(code, next);
  setTimeout(() => tokens = '', tokenValidForMs);
  res.sendStatus(200);
};

exports.getTracks = async (req, res, next) => {
  const {code, offset} = req.body;

  if (!tokens) {
    tokens = await getTokens(code, next);
  }

  axios.request({
    method: 'GET',
    url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
  .then((trackResponse) => {
    res.statusCode = 200;
    res.send(trackResponse.data);
  })
  .catch(next);
}

exports.getArtists = async (req, res, next) => {
  const {code, offset, nextUrl} = req.body;

  if (!tokens) {
    tokens = await getTokens(code, next);
  }

  axios.request({
    method: 'GET',
    url: nextUrl || spotifyArtistsUrl + `?type=artist&limit=50`,
    headers: {
      'Authorization': `Bearer ${tokens['access_token']}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  .then((artistResponse) => {
    res.statusCode = 200;
    res.send(artistResponse.data);
  })
  .catch((err) => console.log(err.response.data));
}