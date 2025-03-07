import mongoose from 'mongoose';

const whatsappLogSchema = new mongoose.Schema({
    number: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('WhatsAppLog', whatsappLogSchema);
