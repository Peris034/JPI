import WhatsAppLog from '../models/WhatsAppLog.js';

export const generateWhatsAppLink = async (req, res) => {
    const { dialCode, number } = req.body;

    if (!number || number.length < 10) {
        return res.status(400).json({ success: false, message: 'Invalid number provided' });
    }

    const completeNumber = `${dialCode}${number}`;
    const message = encodeURIComponent('Here is the website URL: https://www.yourwebsite.com');
    const whatsappLink = `https://wa.me/${completeNumber}?text=${message}`;

    // Log the full combined number into DB
    await WhatsAppLog.create({ number: completeNumber });

    res.json({ success: true, whatsappLink });
};

export const getWhatsAppNumberList = async (req, res) => {
    try {
        const logs = await WhatsAppLog.find().sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        console.error('Failed to fetch WhatsApp numbers:', error);
        res.status(500).json({ message: 'Failed to fetch WhatsApp numbers' });
    }
};
