import { Request, Response } from 'express';
import { RoleService } from '../service/role.service';

const service = new RoleService();

export class RoleController {
  async list(req: Request, res: Response) {
    const roles = await service.listRoles();
    res.json(roles);
  }
}