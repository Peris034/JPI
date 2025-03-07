import express from 'express';
import Product from '../models/Product.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Create upload directory if not exists
const uploadDir = 'uploads/products';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Only JPG or PNG allowed'));
    }
});

// Create Product (with file upload)
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, description, price, isActive } = req.body;
        const imageUrl = `/uploads/products/${req.file.filename}`;
        const product = new Product({ name, description, price, isActive, imageUrl });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Product (text fields only - no file change)
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product.imageUrl) fs.unlinkSync('.' + product.imageUrl); // delete image file
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
