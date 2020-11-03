// Libs
// import { create } from 'apisauce';
import axios from 'axios';

// Config
import { KEY_PEXELS, URL_API_PEXELS } from '../../config';

// Params API
interface ApiParams {
  url?: string;
  v2?: boolean;
  v3?: boolean;
  headers?: any;
}

// define the api
const api = (params?: ApiParams) => {
  // const apiCustom = create({
  //   baseURL: params?.url ? params.url : URL_API_PEXELS,
  //   headers: { Accept: 'application/vnd.github.v3+json' }
  // });
  const apiCustom = axios.create({
    baseURL: params?.url ? params.url : URL_API_PEXELS,
    timeout: 1000,
    headers: { Accept: 'application/vnd.github.v3+json' }
  });

  if (params?.headers) {
    Object.assign(apiCustom.defaults.headers.common, params.headers);
  }

  if (params?.v2) {
    apiCustom.defaults.headers.common['Accept'] = 'application/vnd.api.v2+json';
  }

  if (params?.v3) {
    apiCustom.defaults.headers.common['Accept'] = 'application/vnd.api.v3+json';
  }

  apiCustom.defaults.headers.common['Authorization'] = KEY_PEXELS;

  return apiCustom;
};

export default api;
