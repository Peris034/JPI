import Inquiry from '../models/Inquiry.js';

// GET /api/inquiries - Fetch all inquiries
export const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.status(200).json(inquiries);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch inquiries', error });
    }
};

// POST /api/inquiries - Add new inquiry
export const addInquiry = async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        const savedInquiry = await inquiry.save();
        res.status(201).json(savedInquiry);
    } catch (error) {
        res.status(400).json({ message: 'Failed to add inquiry', error });
    }
};
