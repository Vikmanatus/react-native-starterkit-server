import { AUTHORIZED_ENDPOINTS, AUTHORIZED_ROLES, MATCH_ENDPOINTS, PermissionConfigType } from '@/types';
import { POSTMAN_FORM_TYPES, PostmanConfigType, REQUEST_TYPES } from '@/types/postman';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

/**
 * Used in the automatic generated Postman collection file
 */
export const POSTMAN_PROJECT_NAME = 'express-typescript-starterkit';

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
export const NODE_ENV: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
export const API_URL: string = process.env.API_URL ? process.env.API_URL : `http://localhost:${PORT}`;

/**
 * This object is used to configure our project
 * We define the URL of the endpoint, the authroized roles and the match URL passed
 */
export const permissionConfig: PermissionConfigType = {
  home: {
    url: AUTHORIZED_ENDPOINTS.API_ROOT_ENDPOINT,
    authorized_roles: [AUTHORIZED_ROLES.USER, AUTHORIZED_ROLES.ADMIN, AUTHORIZED_ROLES.SUPER_ADMIN],
    matchUrl: MATCH_ENDPOINTS.MATCH_API_ROOT_ENDPOINT,
  },
  authRoot: {
    url: AUTHORIZED_ENDPOINTS.API_ROOT_ENDPOINT,
    authorized_roles: [AUTHORIZED_ROLES.USER, AUTHORIZED_ROLES.ADMIN, AUTHORIZED_ROLES.SUPER_ADMIN],
    matchUrl: MATCH_ENDPOINTS.MATCH_AUTH_ROOT_ENDPOINT,
  },
};

/**
 * The object used to manage the automatic configuration of our Postman collection file
 */
export const postmanConfig: PostmanConfigType = {
  home: {
    matchUrl: permissionConfig.home.matchUrl,
    isAuthRequired: false,
    requestInformation: { postmanFormType: POSTMAN_FORM_TYPES.NONE, type: REQUEST_TYPES.GET },
    requestName: 'Trigger local endpoint',
  },
  authRoot: {
    matchUrl: permissionConfig.authRoot.matchUrl,
    isAuthRequired: false,
    requestInformation: { postmanFormType: POSTMAN_FORM_TYPES.NONE, type: REQUEST_TYPES.GET },
    requestName: 'Trigger auth root endpoint',
  },
};
