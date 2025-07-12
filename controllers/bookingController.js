const db = require('../db');

exports.createBooking = (req, res) => {
  const { user_id, tour_id, quantity, status } = req.body;

  if (!user_id || !tour_id || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = `
    INSERT INTO bookings (user_id, tour_id, quantity, status)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [user_id, tour_id, quantity, status || 'pending'], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });

    res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
  });
};

exports.getAllBookings = (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    res.json(results);
  });
};

exports.getBookingById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM bookings WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    if (results.length === 0) return res.status(404).json({ error: 'Booking not found' });
    res.json(results[0]);
  });
};

exports.getAllBookings = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    console.error("Get Bookings Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await db.query("UPDATE bookings SET status = ? WHERE id = ?", [status, id]);
    res.json({ message: "Booking status updated" });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ error: "Failed to update status" });
  }
};

exports.getUserBookings = async (req, res) => {
  const { userId } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM bookings WHERE user_id = ?", [userId]);
    res.json(rows);
  } catch (err) {
    console.error("User Booking Error:", err);
    res.status(500).json({ error: "Could not get user bookings" });
  }
};