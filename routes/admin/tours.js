const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Set up image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

module.exports = (db) => {
  // POST - Add a tour
  router.post('/add', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const image = req.file?.filename || null;

    const sql = `INSERT INTO tours (title, description, image) VALUES (?, ?, ?)`;
    db.query(sql, [title, description, image], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, tour_id: result.insertId });
    });
  });

  // GET - All tours
  router.get('/all', (req, res) => {
    db.query(`SELECT * FROM tours ORDER BY id DESC`, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });

  // ✅ Safe Delete Tour with Booking Check
router.delete('/:id', (req, res) => {
  const tourId = req.params.id; // 👈 yahan define karo

  // Pehle check karo booking to nahi
  db.query('SELECT COUNT(*) AS count FROM bookings WHERE tour_id = ?', [tourId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result[0].count > 0) {
      return res.status(400).json({
        error: '❌ Cannot delete: This tour is already booked by a user.',
      });
    }

    // Agar booking nahi hai to delete karo
    db.query('DELETE FROM tours WHERE id = ?', [tourId], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: '✅ Tour deleted successfully' });
    });
  });
});



  return router;
};
