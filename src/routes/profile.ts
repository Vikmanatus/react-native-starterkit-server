import { permissionConfig } from '@/config';
import { BasicJsonResponse, TypedResponse } from '@/types';
import express, { Request } from 'express';

const profileRouter = express.Router();

/**
 * Profile root endpoint
 */
profileRouter.get(permissionConfig.authRoot.url, (_req: Request, res: TypedResponse<BasicJsonResponse>) => {
  return res.status(200).json({ message: 'Hello from profile API index route', success: true });
});

export default profileRouter;
