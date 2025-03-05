import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    issuedDate: Date,
});

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate;
