const db = require('../db');

exports.createPackage = async (req, res) => {
  const { title, description, price, image, location, days, nights } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO packages (title, description, price, image, location, days, nights) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, description, price, image, location, days, nights]
    );
    res.status(201).json({ id: result.insertId, message: "Package created successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create package', details: error.message });
  }
};

// GET all packages
exports.getAllPackages = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM packages');
    res.json(rows);
  } catch (error) {
    console.error("Get all packages error:", error);
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
};

// GET package by ID
exports.getPackageById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM packages WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Get package by ID error:", error);
    res.status(500).json({ error: 'Failed to fetch package' });
  }
};


exports.updatePackage = async (req, res) => {
  const { title, description, price, image, location, days, nights } = req.body;
  const { id } = req.params;

  try {
    const [result] = await db.query(
      'UPDATE packages SET title=?, description=?, price=?, image=?, location=?, days=?, nights=? WHERE id=?',
      [title, description, price, image, location, days, nights, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json({ message: 'Package updated successfully' });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: 'Failed to update package', details: error.message });
  }
};

exports.deletePackage = async (req, res) => {
  console.log("Deleting package with ID:", req.params.id);
  try {
    await db.query('DELETE FROM packages WHERE id=?', [req.params.id]);
    res.json({ message: 'Package deleted successfully' });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: 'Failed to delete package' });
  }
};


