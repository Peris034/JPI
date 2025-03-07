import Certificate from '../models/Certificate.js';

export const getAllCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find().sort({ createdAt: -1 });
        res.json(certificates);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch certificates', error: error.message });
    }
};

export const createCertificate = async (req, res, next) => {
    try {
        const { title, description, issuedDate } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }
        const imageUrl = `/uploads/certificates/${req.file.filename}`;

        const newCertificate = await Certificate.create({
            title,
            description,
            issuedDate: issuedDate ? new Date(issuedDate) : undefined,
            imageUrl
        });

        res.status(201).json(newCertificate);
    } catch (error) {
        next(error);  // Pass to centralized error handler
    }
};

export const updateCertificate = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.file) updateData.imageUrl = `/uploads/certificates/${req.file.filename}`;

        const updatedCertificate = await Certificate.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedCertificate) return res.status(404).json({ message: 'Certificate not found' });

        res.json(updatedCertificate);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update certificate', error: error.message });
    }
};

export const deleteCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndDelete(req.params.id);
        if (!certificate) return res.status(404).json({ message: 'Certificate not found' });

        res.json({ message: 'Certificate deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete certificate', error: error.message });
    }
};

export const toggleCertificateStatus = async (req, res) => {
    try {
        const { isActive } = req.body;
        const updatedCertificate = await Certificate.findByIdAndUpdate(req.params.id, { isActive }, { new: true });

        if (!updatedCertificate) return res.status(404).json({ message: 'Certificate not found' });
        res.json(updatedCertificate);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update certificate status', error: error.message });
    }
};
