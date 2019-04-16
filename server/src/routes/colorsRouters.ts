import express, { Router } from 'express';
import { getColors } from '../controllers/colorsControllers';

const router: Router = express.Router();

router.route('/').get(getColors);

export default router;
