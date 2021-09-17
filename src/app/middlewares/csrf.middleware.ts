import { NextFunction, Request, Response } from 'express';

const csrfMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false });
  return next();
};

export default csrfMiddleware;
