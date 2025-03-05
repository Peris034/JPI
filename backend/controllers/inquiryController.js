import Inquiry from '../models/Inquiry.js';

export const submitInquiry = async (req, res) => {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: 'Inquiry submitted successfully!' });
};

export const getInquiries = async (req, res) => {
    res.json(await Inquiry.find());
};
