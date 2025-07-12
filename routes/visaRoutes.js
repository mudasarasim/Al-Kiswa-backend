const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // GET visas with filters
  router.get('/', (req, res) => {
    const { destination, nationality, residence } = req.query;

    const sql = `
      SELECT * FROM visa_requests
      WHERE destination = ? AND nationality = ? AND country_of_residence = ?
    `;

    db.query(sql, [destination, nationality, residence], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });

  // POST a new visa request
  router.post('/', (req, res) => {
    console.log("📨 Incoming visa data:", req.body);

    const {
      destination,
      visa_type,
      country_of_residence,
      nationality,
      arrival_date,
      adults,
      children,
      processing_time,
      price,
      requirements
    } = req.body;

    const sql = `
      INSERT INTO visa_requests 
      (destination, visa_type, country_of_residence, nationality, arrival_date, adults, children, processing_time, price, requirements)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      destination,
      visa_type,
      country_of_residence,
      nationality,
      arrival_date,
      adults,
      children,
      processing_time,
      price,
      requirements
    ], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, insertId: result.insertId });
    });
  });

  return router;
};
