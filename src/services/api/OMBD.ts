// Libs
// import { ApiResponse } from 'apisauce';
import { AxiosResponse } from 'axios';

// Constants
import { URL_API_OMDBAPI, KEY_OMDBAPI } from 'config';

// Service
import api from '../api/index';

class OMBDProvider {
  static async searchFilms(data: string): Promise<AxiosResponse<any>> {
    return await api({ url: URL_API_OMDBAPI }).get(`${KEY_OMDBAPI}&t=${data}`);
  }
}

export default OMBDProvider;
