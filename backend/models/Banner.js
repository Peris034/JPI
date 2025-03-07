import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    imageUrl: String
});
export default mongoose.model('Banner', schema);
