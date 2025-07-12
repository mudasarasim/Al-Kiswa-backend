// backend/routes/admin/protected.js
const express = require('express');
const router = express.Router();
const adminAuth = require('../../middleware/adminAuth');

router.get('/protected', adminAuth, (req, res) => {
  res.json({ message: "You are an authenticated admin!" });
});



module.exports = router;
