import express from 'express';
import multer from 'multer';
import * as controller from '../controllers/logoController.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', controller.getLogo);
router.put('/', upload.single('logo'), controller.updateLogo);

export default router;
