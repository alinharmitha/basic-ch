import { Router } from 'express';
import { LoginHistoryController } from '../controller/loginhistory.controller';
import { authMiddleware } from '../../middleware/auth.middleware';
import { requireRole } from '../../middleware/role.middleware';

const router = Router();
const controller = new LoginHistoryController();

// Logged-in employee → own history
router.get('/me', authMiddleware, controller.myHistory);

router.get(
  '/',
  authMiddleware,
  requireRole(['ADMIN']),
  controller.list
);

// ADMIN → view any employee history
router.get(
  '/employee/:employeeId',
  authMiddleware,
  requireRole(['ADMIN']),
  controller.byEmployee
);

export default router;