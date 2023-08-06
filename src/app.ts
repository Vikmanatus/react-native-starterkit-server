import express, { Request } from 'express';
import morgan from 'morgan';
import { NODE_ENV, permissionConfig } from '@/config';
import helmet from 'helmet';
import { BasicJsonResponse, ROUTER_ENDPOINTS, TypedResponse } from './types';
import { authRouter } from './routes';
import { authApiLimiter } from './utils/security';

const app = express();

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
/**
 * Authorizing parsing of JSON body and URL encoded requests
 */
app.use(express.json({ limit: '300kb' }));
app.use(express.urlencoded({ extended: true }));

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
