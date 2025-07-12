const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kiswa_database',
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// ✅ Middlewares
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// ✅ Import routes
const authRoutes = require('./routes/authRoutes');
const packageRoutes = require('./routes/packageRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const flightRoutes = require('./routes/flights');
const hotelPhotosRoute = require('./routes/hotelPhotos');
const visaRoutes = require('./routes/visaRoutes');
const visaTravelersRoute = require('./routes/visaTravelers')(db);
const contactRoutes = require('./routes/contactRoutes')(db);
const umrahRoutes = require('./routes/umrahRoutes');
const umrahAdminRoutes = require('./routes/admin/umrahAdmin');

// ✅ Admin routes (with DB dependencies)
const adminTourRoutes = require('./routes/admin/tours')(db);
const adminMessageRoutes = require('./routes/admin/messages')(db);
const adminVisaRoutes = require('./routes/admin/visaApplications')(db);

// ✅ Admin auth/session routes
const adminAuthRoutes = require('./routes/admin/adminAuth');
const adminProtectedRoute = require('./routes/admin/protected');
const adminCheckSessionRoute = require('./routes/admin/checkSession');

// ✅ Public API Routes
app.use('/api/auth', authRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/hotels', hotelPhotosRoute);
app.use('/api/visas', visaRoutes(db));
app.use('/api/travelers', visaTravelersRoute);
app.use('/api/contact', contactRoutes);
app.use('/api/umrah', umrahRoutes);

// ✅ Admin API Routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/admin', adminProtectedRoute);
app.use('/api/admin', adminCheckSessionRoute);
app.use('/api/admin/messages', adminMessageRoutes);
app.use('/api/admin/tours', adminTourRoutes);
app.use('/api/admin/visa-applications', adminVisaRoutes);
app.use('/api/admin/umrah', umrahAdminRoutes); // ✅ Your required route

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
