import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    logo: String,
    paymentOptions: [String],
    whatsappNumber: String
});

export default mongoose.model('AdminSettings', schema);
