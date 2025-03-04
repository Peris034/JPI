import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    topic: { type: String },
    message: { type: String },
    submittedAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
