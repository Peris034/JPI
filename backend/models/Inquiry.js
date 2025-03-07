import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    topic: { type: String, required: true },
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
}, { timestamps: false });  // we manually handle `submittedAt`

export default mongoose.model('Inquiry', inquirySchema);
