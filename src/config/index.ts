export interface DataPhoto {
  id?: number;
  photo?: string;
  nameAuthor?: string;
}

export const KEY_PEXELS = '563492ad6f91700001000001e71f6411895642a6a7a64d3adf6e9869';

export const URL_API_PEXELS = 'https://api.pexels.com/v1/';

export const KEY_OMDBAPI = '?i=tt3896198&apikey=c6ae8112';

export const URL_API_OMDBAPI = `http://www.omdbapi.com/`;

export enum OptionsSelectedModule {
  searchImage,
  form,
  searchFilms,
  chatRandom,
  listTask,
  observerPattern,
  apiContext
}
