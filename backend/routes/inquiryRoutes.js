import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, mobile, email, topic, message } = req.body;

    try {
        const inquiry = new Inquiry({ name, mobile, email, topic, message });
        await inquiry.save();
        res.status(201).json({ message: 'Inquiry submitted successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit inquiry', details: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.status(200).json(inquiries);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch inquiries', details: err.message });
    }
});

export default router;
