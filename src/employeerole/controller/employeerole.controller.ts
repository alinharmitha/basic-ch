import { Request, Response } from 'express';
import { EmployeeRoleService } from '../service/employeerole.service';

const service = new EmployeeRoleService();

export class EmployeeRoleController {
  async assign(req: Request, res: Response) {
    const { employeeId, roleId } = req.body;
    const result = await service.assignRole(employeeId, roleId);
    res.json(result);
  }

  async list(req: Request, res: Response) {
    const result = await service.listEmployeeRoles();
    res.json(result);
  }

}