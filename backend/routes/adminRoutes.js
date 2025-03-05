const express = require('express');
const router = express.Router();
const { getAllInquiries, addCertificate, getCertificates, deleteCertificate } = require('./controllers/adminController');

router.get('/inquiries', getAllInquiries);
router.post('/certificates', addCertificate);
router.get('/certificates', getCertificates);
router.delete('/certificates/:id', deleteCertificate);

module.exports = router;
