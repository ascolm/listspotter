const { clientID, clientSecret } = require('../config');
const axios = require('axios');

const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
const spotifyTracksUrl = 'https://api.spotify.com/v1/me/tracks';
const redirectUri = 'http://localhost:3000/main';
const tokenValidForMs = 1000 * 60 * 45 // This is equal to 45 mins (Token is valid for 1 hour)
let tokens;

// TODO: REFACTOR
async function getTracks (req, res) {
  const {code, offset} = req.body;

  try {
    if (!tokens) {
      const tokenResponse = await axios.request({
        method: 'POST',
        url: spotifyTokenUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`
      });

      tokens = tokenResponse.data;
      setTimeout(() => tokens = '', tokenValidForMs);
    }

    const trackResponse = await axios.request({
      method: 'GET',
      url: spotifyTracksUrl + `?offset=${offset}&limit=50`,
      headers: {
        'Authorization': `Bearer ${tokens['access_token']}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });

    console.log(trackResponse.data.href);
    res.statusCode = 200;
    res.send(trackResponse.data);
  } catch (err) {
    console.log(err);
  }
}


module.exports = { getTracks }