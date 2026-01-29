import { Request, Response, NextFunction } from 'express';

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRoles = req.user?.roles || [];

    const allowed = roles.some(role => userRoles.includes(role));
    if (!allowed) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  };
};