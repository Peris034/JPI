import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

// POST /api/inquiry - Save inquiry form data
router.post('/', async (req, res) => {
    try {
        const { name, mobile, email, topic, message } = req.body;

        const inquiry = new Inquiry({ name, mobile, email, topic, message });

        await inquiry.save();

        res.status(201).json({ message: 'Inquiry submitted successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit inquiry', details: err.message });
    }
});

export default router;
