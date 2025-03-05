import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import whatsappRoutes from './routes/whatsapp.js';
import inquiryRoutes from './routes/inquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const isRender = process.env.RENDER === 'true';
const frontendURL = 'https://jayparivartanindia.netlify.app';

const corsOptions = {
    origin: isRender ? frontendURL : '*',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

app.use('/api', whatsappRoutes);
app.use('/api/inquiry', inquiryRoutes);
app.use('/api/admin', require('./routes/adminRoutes'));

app.listen(PORT, () => {
    console.log(`🚀 Server running at ${isRender ? 'https://jpi-backend.onrender.com' : `http://localhost:${PORT}`}`);
});
