import express from 'express';
import { 
    getAllInquiries, 
    getCertificates, addCertificate, deleteCertificate,
    getBanners, updateBanner,
    getLogo, updateLogo,
    getProducts, addProduct, updateProduct, deleteProduct,
    getPaymentOptions, updatePaymentOptions,
    getWhatsAppNumber, updateWhatsAppNumber
} from '../Controllers/adminController.js';

const router = express.Router();

router.get('/inquiries', getAllInquiries);
router.get('/certificates', getCertificates);
router.post('/certificates', addCertificate);
router.delete('/certificates/:id', deleteCertificate);

router.get('/banners', getBanners);
router.put('/banners', updateBanner);

router.get('/logo', getLogo);
router.put('/logo', updateLogo);

router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.get('/payment-options', getPaymentOptions);
router.put('/payment-options', updatePaymentOptions);

router.get('/whatsapp-number', getWhatsAppNumber);
router.put('/whatsapp-number', updateWhatsAppNumber);

export default router;
