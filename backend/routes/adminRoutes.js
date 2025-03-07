import express from 'express';
import { dashboard, loginAdmin } from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js'; // Make sure the path is correct

const router = express.Router();

router.get('/dashboard', authMiddleware, dashboard);

// Admin Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            success: true,
            token
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default router;
