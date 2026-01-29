import { Router } from 'express';
import { EmployeeController } from '../controller/employee.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();
const controller = new EmployeeController();

router.patch('/details', authMiddleware, controller.saveDetails);
router.get('/', authMiddleware, controller.list);
router.get('/:id', authMiddleware, controller.getById);

export default router;