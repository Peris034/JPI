import mongoose from 'mongoose';

const adminSettingsSchema = new mongoose.Schema({
    logo: String,
    paymentOptions: Array,
    whatsappNumber: String,
});

export default mongoose.model('AdminSettings', adminSettingsSchema);
