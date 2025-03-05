import Inquiry from '../models/Inquiry.js';
import Certificate from '../models/Certificate.js';
import Banner from '../models/Banner.js';
import Product from '../models/Product.js';
import AdminSettings from '../models/AdminSettings.js';

// Inquiries
export const getAllInquiries = async (req, res) => res.json(await Inquiry.find());

// Certificates
export const getCertificates = async (req, res) => res.json(await Certificate.find());
export const addCertificate = async (req, res) => res.json(await new Certificate(req.body).save());
export const deleteCertificate = async (req, res) => res.json(await Certificate.findByIdAndDelete(req.params.id));

// Banners
export const getBanners = async (req, res) => res.json(await Banner.find());
export const updateBanner = async (req, res) => res.json(await Banner.findOneAndUpdate({}, req.body, { upsert: true, new: true }));

// Logo
export const getLogo = async (req, res) => res.json((await AdminSettings.findOne())?.logo);
export const updateLogo = async (req, res) => res.json(await AdminSettings.findOneAndUpdate({}, { logo: req.body.logo }, { upsert: true, new: true }));

// Products
export const getProducts = async (req, res) => res.json(await Product.find());
export const addProduct = async (req, res) => res.json(await new Product(req.body).save());
export const updateProduct = async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }));
export const deleteProduct = async (req, res) => res.json(await Product.findByIdAndDelete(req.params.id));

// Payment Options
export const getPaymentOptions = async (req, res) => res.json((await AdminSettings.findOne())?.paymentOptions);
export const updatePaymentOptions = async (req, res) => res.json(await AdminSettings.findOneAndUpdate({}, { paymentOptions: req.body }, { upsert: true, new: true }));

// WhatsApp Number
export const getWhatsAppNumber = async (req, res) => res.json((await AdminSettings.findOne())?.whatsappNumber);
export const updateWhatsAppNumber = async (req, res) => res.json(await AdminSettings.findOneAndUpdate({}, { whatsappNumber: req.body }, { upsert: true, new: true }));
