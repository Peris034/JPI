import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import whatsappRoutes from './routes/whatsapp.js';  // Correct import
import inquiryRoutes from './routes/inquiry.js'; // Add this

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  // Important to parse JSON body

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ Register Routes
app.use('/api', whatsappRoutes);  // This makes /api/send-whatsapp-link work
app.use('/api/inquiry', inquiryRoutes); 

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
