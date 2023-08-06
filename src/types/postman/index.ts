import { EventDefinition, FormParamDefinition, ItemDefinition } from 'postman-collection';
import { MATCH_ENDPOINTS, PERMISSION_ROUTES_KEYS } from '../index';

/**
 * This interface extends the original permission config type and add's the required addition information for Postman collection file automatic configuration
 */
export type PostmanConfigType = {
  [key in PERMISSION_ROUTES_KEYS]: PostmanObjectConfigType;
};

/**
 * Define the required information for each element of the PostmanConfigType
 */
export type PostmanObjectConfigType = PostmanAddtionalConfigObjectType;

/**
 * This type represent aditionnal information required for our Postman collection file automatic configuration
 */
export type PostmanAddtionalConfigObjectType = {
  isAuthRequired: boolean;
  requestInformation: PostmanRequestInformationType;
  requestName: string;
  event?: PostmanEventInterface[];
  matchUrl:MATCH_ENDPOINTS
};
export enum POSTMAN_EVENTS {
  TEST = 'test',
}
export interface PostmanEventInterface extends EventDefinition {
  listen: POSTMAN_EVENTS;
  script: PostmanScriptsInterface;
}

export interface PostmanScriptsInterface {
  type: POSTMAN_SCRIPT_TYPES;
  exec: string[];
}
export enum POSTMAN_SCRIPT_TYPES {
  JS = 'text/javascript',
}
/**
 * Type used to define what request types and which postman form type string is required for the automatic postman collection configuration
 */

export interface PostmanRequestInformationType<T = unknown> {
  type: REQUEST_TYPES;
  postmanFormType: POSTMAN_FORM_TYPES;
  contentType?: CONTENT_TYPES;
  data?: T;
  authorizationClientInfo?: AuthorizationClientInformation;
}

/**
 * The different request types used
 */
export enum REQUEST_TYPES {
  POST = 'POST',
  PATCH = 'PATCH',
  GET = 'GET',
}

/**
 * This enum is used to configure automatically the postman collection file
 */
export enum POSTMAN_FORM_TYPES {
  RAW = 'raw',
  ENCODED = 'urlencoded',
  FILES = 'formdata',
  NONE = 'none',
  FILE = 'file',
}

/**
 * This enum represents the different content-type used for our Postman configuration file and our Jest test's
 */
export enum CONTENT_TYPES {
  JSON = 'application/json',
  FILES = 'multipart/form-data',
  URL_ENCODED = 'application/x-www-form-urlencoded',
  KEY = 'Content-Type',
}

export type AuthorizationClientInformation = {
  clientId: string;
  clientSecret: string;
};

export type DefaultUnkownObjectType = {
  [key: string]: unknown;
};

export interface OverridePostmanFormDataInterface extends FormParamDefinition {
  key: string;
  type: POSTMAN_FORM_TYPES;
  src: string;
}

/**
 * Interface added because of a definition issue of the ItemDefinition type in the postman-collection package
 *
 * Link of the issue: https://github.com/postmanlabs/postman-collection/issues/1256
 */
export interface OverridePostmanItemConfig extends ItemDefinition {
  event?: PostmanEventInterface[];
}

export type PostmanUrlEncodedObjectForm = {
  key: string;
  value: string;
};

export interface UploadMediaInterface {
  requestKey: string;
  relativeFilePath: string;
}
