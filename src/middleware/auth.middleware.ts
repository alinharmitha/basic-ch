import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).json({ message: 'No token' });

  const token = auth.split(' ')[1];

  try {
    const decoded = verifyToken(token) as any;
    req.user = {
      id: decoded.id,
      roles: decoded.roles,
    };
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};