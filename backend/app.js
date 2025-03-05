import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import whatsappRoutes from './routes/whatsapp.js';
import inquiryRoutes from './routes/inquiry.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Detect environment (Render or Local)
const isRender = process.env.RENDER === 'true';

// Define URLs
const frontendURL = 'https://incomparable-marzipan-956d85.netlify.app';  // Your frontend URL
const baseURL = isRender
    ? 'https://jpi-backend.onrender.com'
    : `http://localhost:${PORT}`;

// Configure CORS - Allow frontend in production; allow all in development
const corsOptions = {
    origin: isRender ? frontendURL : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Register Routes
app.use('/api', whatsappRoutes);
app.use('/api/inquiry', inquiryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at ${baseURL}`);
});
