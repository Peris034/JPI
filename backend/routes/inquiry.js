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

router.get('/', async (req, res) => {
    try {
        res.status(200).send(`
            <html>
            <head><title>Inquiry API</title></head>
            <body>
                <h1>Welcome to the Inquiry API</h1>
                <p>This is a backend response directly from the server.</p>
            </body>
            </html>
        `);
    } catch (err) {
        res.status(500).send('Failed to load message');
    }
});

export default router;
