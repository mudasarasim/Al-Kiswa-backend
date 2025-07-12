// db.js
const mysql = require('mysql2/promise'); // Use promise wrapper

const pool = mysql.createPool({
  host: 'alkiswatourism.com',
  user: 'u419887600_alkiswa',
  password: 'Alkiswa@122',
  database: 'u419887600_alkiswa',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(() => console.log(' MySQL connected (Promise-based)'))
  .catch(err => console.error(' MySQL connection error:', err));

module.exports = pool;
