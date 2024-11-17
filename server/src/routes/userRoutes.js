import express from 'express';
import { health, authMiddleware, userData } from '../controllers/userController.js';

const router = express.Router();
router.route('/health').get(health);
router.route('/auth').get(authMiddleware, userData)

export default router