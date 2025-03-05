import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import whatsappRoutes from './routes/whatsappRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Define isRender
const isRender = process.env.RENDER === 'true';

const corsOptions = {
    origin: isRender ? 'https://jayparivartanindia.netlify.app' : '*',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

app.use('/api/whatsapp', whatsappRoutes);
app.use('/api/inquiry', inquiryRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running at ${isRender ? 'https://jpi-backend.onrender.com' : `http://localhost:${PORT}`}`);
});
