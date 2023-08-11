import express, { Request } from 'express';
import morgan from 'morgan';
import { NODE_ENV, permissionConfig } from '@/config';
import { BasicJsonResponse, ROUTER_ENDPOINTS, TypedResponse } from './types';
import { authRouter, newRouter, profileRouter } from './routes';
import { authApiLimiter } from './utils/security';
import helmet from 'helmet';
const app = express();

/**
 * Authorizing parsing of JSON body and URL encoded requests
 */
app.use(express.json({ limit: '300kb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/.well-known', (_req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.use(express.static('public'));

app.use(helmet({ xssFilter: true, hidePoweredBy: true }));

if (NODE_ENV === 'development') {
  /**
   * Used to display information about incoming HTTP requests in the terminal
   */
  app.use(morgan('dev'));
}

app.set('trust proxy', true);

/**
 * Adding the rate limiter to all routes defined under /api/auth
 */
app.use(ROUTER_ENDPOINTS.AUTH, authApiLimiter);

/**
 * The different other endpoints used in our API
 */

app.use(ROUTER_ENDPOINTS.AUTH, authRouter);
app.use(ROUTER_ENDPOINTS.PROFILE, profileRouter);
app.use(ROUTER_ENDPOINTS.NEWS, newRouter);

/**
 * Root API home
 */
app.get(permissionConfig.home.url, (_req: Request, res: TypedResponse<BasicJsonResponse>) => {
  return res.status(200).json({ message: 'Welcolme to express-typescript-starterkit', success: true });
});

/**
 * Used to redirect user's in case of unexisting URL
 */
app.use((_req, res: TypedResponse<BasicJsonResponse>) => {
  res.status(404).json({
    message: 'Page not founded',
    success: false,
  });
});

export default app;
