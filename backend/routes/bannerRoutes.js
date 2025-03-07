import express from 'express';
import multer from 'multer';
import * as controller from '../controllers/bannerController.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', controller.getBanners);
router.put('/', upload.single('image'), controller.updateBanner);

export default router;
