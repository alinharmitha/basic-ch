import { Router } from 'express';
import { RoleController } from '../controller/role.controller';

const router = Router();
const controller = new RoleController();

router.get('/', controller.list);

export default router;
