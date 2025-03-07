import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

// Importing Routes
import adminRoutes from './routes/adminRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import publicProductRoutes from './routes/publicProductRoutes.js';
import whatsappRoutes from './routes/whatsappRoutes.js';
import bannerRoutes from './routes/bannerRoutes.js';
import logoRoutes from './routes/logoRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

// Configurations
dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join('uploads')));

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));
    })
    .catch((err) => console.log(`MongoDB connection error: ${err.message}`));

// Route Middlewares
app.use('/api/admin', adminRoutes);
app.use('/api/admin/certificates', certificateRoutes);
app.use('/api/admin/products', productRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/products', publicProductRoutes);
app.use('/api/whatsapp', whatsappRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/logo', logoRoutes);
app.use('/api/payment', paymentRoutes);

// app.listen(process.env.PORT || 5000, () => console.log('Server Running'));
