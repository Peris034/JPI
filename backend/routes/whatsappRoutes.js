import express from 'express';
import { generateWhatsAppLink, getWhatsAppNumberList } from '../controllers/whatsappController.js';

const router = express.Router();

router.post('/send-whatsapp-link', generateWhatsAppLink);
router.get('/list', getWhatsAppNumberList);

export default router;
