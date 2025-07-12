const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./Config/db'); // ✅ Import connection pool from your db.js

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Middleware
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('✅ Backend is running on Railway');
});

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
const packageRoutes = require('./routes/packageRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const flightRoutes = require('./routes/flights');
const hotelPhotosRoute = require('./routes/hotelPhotos');
const visaRoutes = require('./routes/visaRoutes');
const visaTravelersRoute = require('./routes/visaTravelers')(db);
const contactRoutes = require('./routes/contactRoutes')(db);
const umrahRoutes = require('./routes/umrahRoutes');

// Admin Routes
const adminAuthRoutes = require('./routes/admin/adminAuth');
const adminProtectedRoute = require('./routes/admin/protected');
const adminCheckSessionRoute = require('./routes/admin/checkSession');
const adminTourRoutes = require('./routes/admin/tours')(db);
const adminMessageRoutes = require('./routes/admin/messages')(db);
const adminVisaRoutes = require('./routes/admin/visaApplications')(db);
const umrahAdminRoutes = require('./routes/admin/umrahAdmin');

// ✅ Apply API routes
app.use('/api/auth', authRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/hotels', hotelPhotosRoute);
app.use('/api/visas', visaRoutes(db));
app.use('/api/travelers', visaTravelersRoute);
app.use('/api/contact', contactRoutes);
app.use('/api/umrah', umrahRoutes);

app.use('/api/admin', adminAuthRoutes);
app.use('/api/admin', adminProtectedRoute);
app.use('/api/admin', adminCheckSessionRoute);
app.use('/api/admin/messages', adminMessageRoutes);
app.use('/api/admin/tours', adminTourRoutes);
app.use('/api/admin/visa-applications', adminVisaRoutes);
app.use('/api/admin/umrah', umrahAdminRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});