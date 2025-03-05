const UserInquiry = require('../models/UserInquiry');
const Certificate = require('../models/Certificate');

exports.getAllInquiries = async (req, res) => {
    const inquiries = await UserInquiry.find();
    res.json(inquiries);
};

exports.addCertificate = async (req, res) => {
    const { title, imageUrl, issuedDate } = req.body;
    const cert = new Certificate({ title, imageUrl, issuedDate });
    await cert.save();
    res.json({ success: true });
};

exports.getCertificates = async (req, res) => {
    const certificates = await Certificate.find();
    res.json(certificates);
};

exports.deleteCertificate = async (req, res) => {
    await Certificate.findByIdAndDelete(req.params.id);
    res.json({ success: true });
};
