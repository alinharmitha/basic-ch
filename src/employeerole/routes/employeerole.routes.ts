import { Router } from 'express';
import { EmployeeRoleController } from '../controller/employeerole.controller';
import { authMiddleware } from '../../middleware/auth.middleware';
import { requireRole } from '../../middleware/role.middleware';

const router = Router();
const controller = new EmployeeRoleController();

router.post(
  '/assign',
  authMiddleware,
  requireRole(['ADMIN']),
  controller.assign
);

router.get('/', authMiddleware, controller.list);

export default router;