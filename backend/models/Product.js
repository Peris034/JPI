import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
