import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
});

export default mongoose.model('Banner', bannerSchema);
