'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access' +
    '?client_id=he1k2l2636m6akrde4o968joim' +
    '&client_secret=ve3sdie3hq9t2ipjgb87pptah5' +
    '&grant_type=authorization_code' +
    'redirect_uri=https://lucianmurmurache.github.io/' +
    '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};