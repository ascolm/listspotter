const axios = require('axios');
const getTokens = require('./getTokens');
const spotifyTracksUrl = 'https://api.spotify.com/v1/me/tracks';
const tokenValidForMs = 1000 * 60 * 45 // This is equal to 45 mins (Token is valid for 1 hour)


let tokens;

// TODO: CHECK ERROR HANDLING IN CATCH METHODS // CREATE CUSTOM HANDLER MIDDLEWARE

exports.getTracks = async (req, res, next) => {
  const {code, offset} = req.body;

  if (!tokens) {
    tokens = await getTokens(code, next);
    setTimeout(() => tokens = '', tokenValidForMs);
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
    console.log(trackResponse.data.href);
    res.statusCode = 200;
    res.send(trackResponse.data);
  })
  .catch(next);
}