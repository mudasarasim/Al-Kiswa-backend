// db.js
const mysql = require('mysql2/promise'); // Use promise wrapper

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kiswa_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(() => console.log(' MySQL connected (Promise-based)'))
  .catch(err => console.error(' MySQL connection error:', err));

module.exports = pool;
