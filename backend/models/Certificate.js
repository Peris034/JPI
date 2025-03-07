import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    issuedDate: Date,
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;
