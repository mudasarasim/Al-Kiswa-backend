const express = require('express');
const router = express.Router();
const adminAuth = require('../../middleware/adminAuth'); // ✅ Token verification middleware

// 🛡️ Protected admin session check
router.get('/check-session', adminAuth, (req, res) => {
  res.json({ admin: req.admin });
});

module.exports = router;
