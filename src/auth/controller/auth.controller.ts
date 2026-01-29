import { Request, Response } from 'express';
import { AuthService } from '../service/auth.service';
import { registerSchema } from '../dto/register.schema';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const validatedData = registerSchema.parse(req.body);
    const result = await authService.register(validatedData);
    res.json(result);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await authService.login(email, password, {
      ip: req.ip,
      userAgent: req.headers['user-agent'],
    });
    res.json(result);
  }
}