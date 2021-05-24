import { NextFunction, Request, Response } from 'express';

const xHttpMethodOverride = 'x-http-method-override';

export function HttpMethodOverrideMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.method.toUpperCase() === 'POST') {
    const xHttpMethodOverrideValue = req.headers[xHttpMethodOverride];
    if (xHttpMethodOverrideValue) {
      if (typeof xHttpMethodOverrideValue === 'string') {
        req.method = xHttpMethodOverrideValue.toUpperCase();
      } else {
        req.method = xHttpMethodOverrideValue[0].toUpperCase();
      }
    }
  }
  next();
}
