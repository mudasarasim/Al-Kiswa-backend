const express = require('express');
const router = express.Router();
const db = require('../../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'khubaibisagoodB$oy'; // Move to .env ideally

// ✅ Admin Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [rows] = await db.execute('SELECT * FROM admins WHERE username = ?', [username]);
  if (rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

  const admin = rows[0];
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ token });
});

// ✅ Admin Logout (for JWT – frontend handles actual logout)
router.get('/logout', (req, res) => {
  res.json({ message: 'Admin logged out successfully' });
});

module.exports = router;
