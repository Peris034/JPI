import express from 'express';
import { getInquiries, addInquiry } from '../controllers/inquiryController.js';

const router = express.Router();

// Public routes (can be accessed without authentication)
router.get('/', getInquiries);
router.post('/', addInquiry);

export default router;
