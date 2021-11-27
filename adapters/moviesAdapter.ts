import {get} from './fetchAdapter';
import {apiURLBuilder} from '../utils/stringBuilder';
import {IMovies} from '../interfaces/movies';

export const getAllMovies = async() => {
  const path = apiURLBuilder({type: 'movies'});
  console.log('path:', path);
  const json = await get<IMovies>(path);
  return json;
}

export const getMovieById = async (id:string) => {
  const path = apiURLBuilder({type: 'movies'});
//   const path = `${API_STORIES_DETAIL}/${id}?${API_KEY_HASH}`;
//   const json = get<IStories>(path);
//   return json;
};