const db = require('../db');

// Get all visas
exports.getAllVisas = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM visas');
    res.json(rows);
  } catch (err) {
    console.error("Visa fetch error:", err);
    res.status(500).json({ error: 'Failed to get visas' });
  }
};

// Add new visa
exports.createVisa = async (req, res) => {
  const { country, visa_type, duration, price, description, image_url } = req.body;
  try {
    await db.query(
      'INSERT INTO visas (country, visa_type, duration, price, description, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [country, visa_type, duration, price, description, image_url]
    );
    res.status(201).json({ message: 'Visa created successfully' });
  } catch (err) {
    console.error("Create visa error:", err);
    res.status(500).json({ error: 'Failed to create visa' });
  }
};
