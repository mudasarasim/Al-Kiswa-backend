// routes/umrahRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db');

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/umrah'); // folder must exist
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post(
  '/submit',
  upload.fields([
    { name: 'passportFront', maxCount: 1 },
    { name: 'passportBack', maxCount: 1 },
    { name: 'emiratesId', maxCount: 1 },
    { name: 'photo', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        email,
        countryCode,
        phone,
        title,
        gender,
        firstName,
        lastName,
        packageType,
        adults,
        children,
        roomType,
      } = req.body;

      const files = req.files;

      const sql = `
        INSERT INTO umrah_applications (
          email, country_code, phone, title, gender, first_name, last_name,
          passport_front, passport_back, emirates_id, photo,
          package_type, adults, children, room_type
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      await db.execute(sql, [
        email,
        countryCode,
        phone,
        title,
        gender,
        firstName,
        lastName,
        files.passportFront?.[0]?.filename || '',
        files.passportBack?.[0]?.filename || '',
        files.emiratesId?.[0]?.filename || '',
        files.photo?.[0]?.filename || '',
        packageType,
        adults,
        children,
        roomType,
      ]);

      res.json({ message: 'Umrah application submitted successfully.' });
    } catch (error) {
      console.error('❌ Umrah form submission failed:', error);
      res.status(500).json({ error: 'Something went wrong on the server.' });
    }
  }
);

module.exports = router;
