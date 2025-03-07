import express from 'express';
import * as controller from '../controllers/paymentController.js';

const router = express.Router();
router.get('/', controller.getPaymentOptions);
router.put('/', controller.updatePaymentOptions);

export default router;
