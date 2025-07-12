const axios = require('axios');
require('dotenv').config();

const getHotelPhotos = async (req, res) => {
  const { id } = req.query; // hotel ID passed from frontend or Postman

  if (!id) {
    return res.status(400).json({ error: 'Hotel ID is required' });
  }

  try {
    const response = await axios.get('https://hotels4.p.rapidapi.com/properties/get-hotel-photos', {
      params: { id },
      headers: {
        'X-Rapidapi-Key': process.env.RAPIDAPI_HOTEL_KEY,
        'X-Rapidapi-Host': process.env.RAPIDAPI_HOTEL_HOST,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('❌ Hotel Photos API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch hotel photos' });
  }
};

module.exports = { getHotelPhotos };
