import WhatsAppLog from '../models/WhatsAppLog.js';

export const sendWhatsAppLink = async (req, res) => {
    const { dialCode, number } = req.body;

    if (!dialCode || !number || number.length !== 10) {
        return res.status(400).json({ message: 'Invalid number' });
    }

    const fullNumber = `${dialCode}${number}`;
    const websiteUrl = "https://jayparivartanindia.netlify.app";
    const message = encodeURIComponent(`Hi!\nPlease visit: ${websiteUrl}\nThank you!`);
    const link = `https://wa.me/${fullNumber}?text=${message}`;

    await WhatsAppLog.create({ number: fullNumber });
    res.json({ link });
};
