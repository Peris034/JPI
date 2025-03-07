import Product from '../models/Product.js';

export const getProducts = async (req, res) => res.json(await Product.find());
export const addProduct = async (req, res) => {
    const product = new Product({ ...req.body, imageUrl: req.file?.path });
    await product.save();
    res.json(product);
};
