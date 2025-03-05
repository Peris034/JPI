import express from 'express';
import WhatsAppLog from '../models/WhatsAppLog.js';

const router = express.Router();

router.post('/send-whatsapp-link', async (req, res) => {
    const { dialCode, number } = req.body;

    if (!dialCode || !number || number.length !== 10) {
        return res.status(400).json({ success: false, message: 'Invalid number provided.' });
    }

    const fullNumber = `${dialCode}${number}`;
    const websiteUrl = "https://jayparivartanindia.netlify.app";
    const message = encodeURIComponent(`Hi!\nPlease click on the Link of SHAILESH BOGHARA: ${websiteUrl}\nThank you!`);

    const whatsappLink = `https://wa.me/${fullNumber}?text=${message}`;

    try {
        await WhatsAppLog.create({ number: fullNumber });
        res.json({ success: true, whatsappLink });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

export default router;
