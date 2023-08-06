import { Request, Response } from 'express';

/**
 * This enum represents the different roles allowed for our role-authentification system
 */
export enum AUTHORIZED_ROLES {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super-admin',
}

/**
 * The keys thaht will be used inside permissionConfig object
 */
export enum PERMISSION_ROUTES_KEYS {
  HOME="home",
  AUTH_HOME="authRoot"
}
/**
 * The endpoints passed to Express router function
 */
export enum AUTHORIZED_ENDPOINTS {
  API_ROOT_ENDPOINT = '/',
}

/**
 * This enum represents the different API endpoints decorators passes to express in app.ts file
 */
export enum ROUTER_ENDPOINTS {
  AUTH = '/api/auth',
}

/**
 * Thses URL's used to check if the user is allowed to access specific endpoint, they can also be useful to create the URL's
 * in our automated postman config file and be passed into Jest function's
 */
export enum MATCH_ENDPOINTS {
  MATCH_API_ROOT_ENDPOINT = AUTHORIZED_ENDPOINTS.API_ROOT_ENDPOINT,
  MATCH_AUTH_ROOT_ENDPOINT = ROUTER_ENDPOINTS.AUTH,
}


/**
 * This type defines the different values used in our permission config objects
 */
export type PermissionObjectType = {
  url: AUTHORIZED_ENDPOINTS;
  authorized_roles: AUTHORIZED_ROLES[];
  matchUrl: MATCH_ENDPOINTS;
};

/**
 * This type represents the definition of our config object used to :
 * - define the different roles who are allowed to access the route
 * - the URL
 * - the match URL
 */
export type PermissionConfigType = {
  [key in PERMISSION_ROUTES_KEYS]: PermissionObjectType;
};

/**
 * This type will be used to override the body defined in the Express json() method
 */
export type SetTypedResponse<Type, T = Response> = (body?: Type) => T;

/**
 * This interface is used to type the body of the arguments passed in the Express json() method
 * Source: https://stackoverflow.com/questions/62736335/typescript-and-express-js-change-res-json-response-type
 */
export interface TypedResponse<Type> extends Response {
  json: SetTypedResponse<Type, this>;
}

export interface TypedRequestBody<Type> extends Request {
  body: Type;
}

/**
 * This interface represents the basic schema used in many requests where we don't need to send data
 */
export interface BasicJsonResponse {
  message: string;
  success: boolean;
}
