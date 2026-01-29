import { Request, Response } from 'express';
import { EmployeeService } from '../service/employee.service';

const service = new EmployeeService();

export class EmployeeController {
  async saveDetails(req: Request, res: Response) {
    const employeeId = req.user!.id;
    const result = await service.upsertDetails(employeeId, req.body);
    res.json(result);
  }

  async list(req: Request, res: Response) {
    const result = await service.listEmployees();
    res.json(result);
  }

async getById(req: Request, res: Response) {
    const employeeId = Number(req.params.id);

    const employee = await service.getEmployeeById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employee);
  }

}