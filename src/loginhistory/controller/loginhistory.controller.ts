import { Request, Response } from 'express';
import { LoginHistoryService } from '../service/loginhistory.service';

const service = new LoginHistoryService();

export class LoginHistoryController {
  async myHistory(req: Request, res: Response) {
    const employeeId = req.user!.id;
    const history = await service.getMyHistory(employeeId);
    res.json(history);
  }

  async byEmployee(req: Request, res: Response) {
    const employeeId = Number(req.params.employeeId);
    const history = await service.getHistoryByEmployee(employeeId);
    res.json(history);
  }

async list(req: Request, res: Response) {
  const history = await service.listAll();
  res.json(history);
}

}