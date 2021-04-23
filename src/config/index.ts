export interface DataPhoto {
  id?: number;
  photo?: string;
  nameAuthor?: string;
}

export const KEY_PEXELS = '563492ad6f91700001000001e71f6411895642a6a7a64d3adf6e9869';

export const URL_API_PEXELS = 'https://api.pexels.com/v1/';

export const KEY_OMDBAPI = '?i=tt3896198&apikey=c6ae8112';

export const URL_API_OMDBAPI = `http://www.omdbapi.com/`;

export const URL_JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com/';

export enum OptionsSelectedModule {
  searchImage,
  form,
  searchFilms,
  chatRandom,
  listTask,
  observerPattern,
  apiContext,
  patternRenderProp,
  hoc,
  hooks,
  children,
  codeSplitting,
  animationsAndTransitions,
  componentStyles
}

// Paleta de colores
export const THEME_PRIMARY = {
  primary: '#00ACE0',
  primaryDark: '#0C42ED',
  primaryLight: '#0CF7F0',
  light: '#ffffff'
};

// constantes completas
export const METRIC_COMPONENTS = {
  padding: 'padding: 1em;'
};
