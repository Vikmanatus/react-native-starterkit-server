import { permissionConfig } from '@/config';
import { BasicJsonResponse, TypedResponse } from '@/types';
import express, { Request } from 'express';

const newRouter = express.Router();

/**
 * News root endpoint
 */
newRouter.get(permissionConfig.authRoot.url, (_req: Request, res: TypedResponse<BasicJsonResponse>) => {
  return res.status(200).json({ message: 'Hello from news API index route', success: true });
});

export default newRouter;
