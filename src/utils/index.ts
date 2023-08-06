/**
 * This function will decode the given string from Base64
 * @param {string} str The given string to decode
 * @returns The original decoded value
 */
export const decodeBase64 = (str: string): string => Buffer.from(str, 'base64').toString('binary');

/**
 * This function will encode the given string to Base64 value
 * @param {string} str The given string to encode
 * @returns The encoded string
 */
export const encodeToBase64 = (str: string): string => Buffer.from(str, 'binary').toString('base64');
