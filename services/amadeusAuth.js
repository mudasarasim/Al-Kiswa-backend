const axios = require('axios');
require('dotenv').config();

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.AMADEUS_HOTEL_CLIENT_ID, // 👈 USE hotel credentials
        client_secret: process.env.AMADEUS_HOTEL_CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('❌ Failed to fetch Amadeus access token:', error.response?.data || error.message);
    throw new Error('Amadeus token error');
  }
};

module.exports = { getAccessToken };
