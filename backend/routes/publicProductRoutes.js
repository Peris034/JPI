import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(products);
});

export default router;
