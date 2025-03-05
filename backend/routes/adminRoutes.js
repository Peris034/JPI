const express = require('express');
const router = express.Router();
import express from 'express';
import { getAllInquiries, addCertificate, getCertificates, deleteCertificate } from './controllers/adminController.js';

router.get('/inquiries', getAllInquiries);
router.post('/certificates', addCertificate);
router.get('/certificates', getCertificates);
router.delete('/certificates/:id', deleteCertificate);

module.exports = router;
