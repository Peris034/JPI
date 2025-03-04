import mongoose from 'mongoose';

const WhatsAppLogSchema = new mongoose.Schema({
    number: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const WhatsAppLog = mongoose.model('WhatsAppLog', WhatsAppLogSchema);

export default WhatsAppLog;
