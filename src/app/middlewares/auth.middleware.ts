import { NextFunction, Request, Response } from 'express';
import UnauthorizedError from '../errors/unauthorized.error';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.isUnauthenticated()) {
    return next(new UnauthorizedError());
  }
  return next();
};

export default authMiddleware;
