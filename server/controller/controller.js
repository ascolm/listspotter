const { clientID, clientSecret } = require('../config');
const axios = require('axios');

const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
const spotifyTracksUrl = 'https://api.spotify.com/v1/me/tracks';
const redirectUri = 'http://localhost:3000/main';

function getToken () {


}

async function getTracks (req, res) {
  const code = req.body.code;
  try {
    const tokenResponse = await axios.request({
      method: 'POST',
      url: spotifyTokenUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientID}&client_secret=${clientSecret}`
    });
    const tokens = tokenResponse.data;
    const trackResponse = await axios.request({
      method: 'GET',
      url: spotifyTracksUrl,
      headers: {
        'Authorization': `Bearer ${tokens['access_token']}`
      }
    });
    console.log(trackResponse.data);
    console.log(trackResponse.data.items[0]);
    res.statusCode = 200;
    res.send(trackResponse.data.items);
  } catch (err) {
    console.log(err);
  }
}


module.exports = { getTracks }