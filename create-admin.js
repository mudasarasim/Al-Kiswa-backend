// create-admin.js
const bcrypt = require('bcryptjs');
const db = require('./db'); // make sure this points to your MySQL connection file

(async () => {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.execute(
      'INSERT INTO admins (username, password) VALUES (?, ?)',
      ['admin', hashedPassword]
    );
    console.log('✅ Admin created successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Error creating admin:', err);
    process.exit(1);
  }
})();
