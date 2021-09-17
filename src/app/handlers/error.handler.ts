import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  if (err.httpCode) {
    return res.sendStatus(err.httpCode);
  }

  return res.sendStatus(500);
};

export default errorHandler;
