/* eslint-disable prefer-const */
import { getToken } from '../utils/cookies';
import endpointInfo from './endpoints';


export async function makeAPICall<T>(
  apiName: string,
  payload: Record<string, unknown> = {},
  params: Record<string, string | number | boolean> = {},
  substitutions: Record<string, string> = {},
  formData: FormData | undefined = undefined
): Promise<T> {
  let { endpoint, requestType } = endpointInfo[apiName];
  const token = getToken();

  Object.keys(substitutions).forEach((key) => {
    const substitution = substitutions[key];
    endpoint = endpoint.replace(`[${key}]`, substitution);
  });
  const url = new URL(`${import.meta.env.VITE_BASE_URL}${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key].toString())
  );

  const options: RequestInit = {
    method: requestType,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  if (requestType.toUpperCase() !== 'GET') {
    if (formData) {
      // For FormData (multipart file upload)
      options.body = formData;
    } else {
      // For JSON payload
      const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');

      options.headers=requestHeaders;
      
      options.body = JSON.stringify(payload);
    }
  }

  // Perform the fetch operation
  const response = await fetch(url.toString(), options);
  
  
  if (!response.ok) {
    const error = await response.json();
    return Promise.reject(error);
  }
  return response.json() as Promise<T>;
}
