const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.get('/', bookingController.getAllBookings);
router.put('/:id', bookingController.updateBookingStatus);
router.get('/user/:userId', bookingController.getUserBookings);
module.exports = router;
