// Libs
// import { ApiResponse } from 'apisauce';
import { AxiosResponse } from 'axios';

// Constants
import { URL_JSONPLACEHOLDER } from 'config';

// Service
import api from '../api/index';

class JsonPlaceHolderProvider {
  /**
   * @function getTodos
   * @description obtener todos
   * @return {Promise<AxiosResponse<any>>}
   */
  static async getTodos(): Promise<AxiosResponse<any>> {
    return await api({ url: URL_JSONPLACEHOLDER }).get(`todos`);
  }

  /**
   * @function getUsers
   * @description obtener todos los usuarios
   * @return {Promise<AxiosResponse<any>>}
   */
  static async getUsers(): Promise<AxiosResponse<any>> {
    return await api({ url: URL_JSONPLACEHOLDER }).get('users');
  }
}

export default JsonPlaceHolderProvider;
