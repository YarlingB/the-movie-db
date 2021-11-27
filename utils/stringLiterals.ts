export const BASE_API_URL = 'https://api.themoviedb.org/3';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
export const IMAGE_SIZE = {
  original: 'original',
  w500: 'w500',
};
const API_KEY = 'api_key=e0d4fac12f8304bf38bcfb8d9016abd1';
export const MOVIES_LIST = `${BASE_API_URL}/discover/movie?${API_KEY}`;