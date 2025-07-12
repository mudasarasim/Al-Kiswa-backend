const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

module.exports = (db) => {
  // Add new tour
  router.post('/add', upload.single('image'), (req, res) => {
    const { title, description, price, duration, category } = req.body;
    const image = req.file?.filename || null;

    const sql = `
      INSERT INTO tours (title, description, image, price, duration, category)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [title, description, image, price, duration, category], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: 'Tour added successfully' });
    });
  });

  // Get all tours
  router.get('/', (req, res) => {
    db.query('SELECT * FROM tours ORDER BY id DESC', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });

  // Delete a tour
  router.delete('/:id', (req, res) => {
    db.query('DELETE FROM tours WHERE id = ?', [req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: 'Tour deleted' });
    });
  });
  return router;
};
