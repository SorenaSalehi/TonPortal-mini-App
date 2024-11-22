import express from 'express';
import * as userController from '../controllers/userController.js';
import { groupAi } from './../models/aiController.js';

const router = express.Router();
router.route('/health').get(userController.health);
router.route('/start').get(userController.authMiddleware, userController.userData)
router.route('/group').get(userController.authMiddleware, userController.groupData)
router.route('/analysis/groups').get(userController.authMiddleware, groupAi)

export default router