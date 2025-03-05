import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import whatsappRoutes from './routes/whatsapp.js';
import inquiryRoutes from './routes/inquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Detect environment (Render or Local)
const isRender = process.env.RENDER === 'true';
const frontendURL = 'https://incomparable-marzipan-956d85.netlify.app';  // Your frontend URL
const baseURL = isRender ? 'https://jpi-backend.onrender.com' : `http://localhost:${PORT}`;

// CORS - Allow only your frontend in production
app.use(cors({
    origin: isRender ? frontendURL : '*',
    credentials: true
}));
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api', whatsappRoutes);
app.use('/api/inquiry', inquiryRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running at ${baseURL}`);
});
