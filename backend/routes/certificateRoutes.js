import express from 'express';
import multer from 'multer';
import {
    getAllCertificates,
    createCertificate,
    updateCertificate,
    deleteCertificate,
    toggleCertificateStatus
} from '../controllers/certificateController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: 'uploads/certificates',
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

router.get('/', getAllCertificates);
router.post('/', upload.single('image'), createCertificate);
router.put('/:id', upload.single('image'), updateCertificate);
router.delete('/:id', deleteCertificate);
router.patch('/:id', toggleCertificateStatus);

export default router;
