const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'gillbaba.com',
  user: 'u167227426_alkiswa_tours',
  password: 'Alkiswa@123',
  database: 'u167227426_alkiswa_tours',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Test MySQL connection when server starts
(async () => {
  try {
    const conn = await db.getConnection();
    console.log('✅ Connected to MySQL');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
  }
})();

module.exports = db;
// hkj


