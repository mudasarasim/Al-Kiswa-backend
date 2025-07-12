const express = require('express');
const router = express.Router();
const { getHotelPhotos } = require('../controllers/hotelPhotosController');

router.get('/photos', getHotelPhotos);

module.exports = router;
