const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  const uploadPath = path.join(__dirname, '../uploads'); // go up one level from routes
  cb(null, uploadPath);
},

  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

module.exports = (db) => {
  router.post('/', upload.fields([
    { name: 'passport_copy', maxCount: 1 },
    { name: 'photograph', maxCount: 1 },
  ]), (req, res) => {
    const {
      email, country_code, phone, title, gender, first_name, middle_name, last_name,
      mother_name, dob, birth_country, marital_status, education, profession,
      passport_number, nationality, city, address, payment_method, terms_accepted
    } = req.body;

    const passport_copy = req.files['passport_copy']?.[0]?.filename || null;
    const photograph = req.files['photograph']?.[0]?.filename || null;

    const sql = `
      INSERT INTO visa_travelers (
        email, country_code, phone, title, gender, first_name, middle_name, last_name,
        mother_name, dob, birth_country, marital_status, education, profession,
        passport_number, nationality, city, address, passport_copy, photograph,
        payment_method, terms_accepted
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      email, country_code, phone, title, gender, first_name, middle_name, last_name,
      mother_name, dob, birth_country, marital_status, education, profession,
      passport_number, nationality, city, address, passport_copy, photograph,
      payment_method, terms_accepted
    ], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, insertId: result.insertId });
    });
  });

  return router;
};
