import express from 'express';
import {Router} from 'express';
import { getTags } from '../controllers/tagsControllers';

const router: Router = express.Router();

router.route('/').get(getTags);

export default router;
