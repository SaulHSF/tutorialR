// Libs
// import { ApiResponse } from 'apisauce';
import { AxiosResponse } from 'axios';

// Service
import api from '../api/index';

class PexelsProvider {
  static async searchPhoto(data: string, perPage?: number, page?: number): Promise<AxiosResponse<any>> {
    return await api().get(`search?query="${data}"&per_page=${perPage || 5}&page=${page || 1}&locale='es-ES'`);
  }
}

export default PexelsProvider;
