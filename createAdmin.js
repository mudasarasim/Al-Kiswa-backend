// TEMP SCRIPT: run once to create admin
const bcrypt = require('bcryptjs');
const db = require('./db');

(async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await db.execute('INSERT INTO admins (username, password) VALUES (?, ?)', ['admin', hashedPassword]);
  console.log('Admin created');
})();
