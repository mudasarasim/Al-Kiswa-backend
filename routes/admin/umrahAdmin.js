const express = require('express');
const router = express.Router();
const db = require('../../db');
const path = require('path');

// Get all Umrah submissions
router.get('/all', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM umrah_applications ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching Umrah submissions:', err);
    res.status(500).json({ error: 'Server error while fetching Umrah data' });
  }
});

// Serve uploaded files (optional, if needed for frontend preview)
router.get('/uploads/:filename', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads/umrah', req.params.filename);
  res.sendFile(filePath);
});

module.exports = router;
