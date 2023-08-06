import { permissionConfig } from '@/config';
import { BasicJsonResponse, TypedResponse } from '@/types';
import express, { Request } from 'express';

const authRouter = express.Router();

/**
 * Auth root endpoint
 */
authRouter.get(permissionConfig.authRoot.url, (_req: Request, res: TypedResponse<BasicJsonResponse>) => {
  return res.status(200).json({ message: 'Hello from Auth API index route', success: true });
});

export default authRouter;