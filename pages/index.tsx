import {useState, useEffect, useReducer, Reducer} from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AppLayout from '../layouts/appLayout';
import APIReducer from '../reducers/apiReducer';
import {APIResultType, APIStateAction} from '../types/reducer';
import {APIActions} from '../reducers/actions';
import {IMovies} from '../interfaces/movies';
import {getAllMovies} from '../adapters/moviesAdapter';
import styles from '../styles/Home.module.css';

const initialState: APIResultType<IMovies> = {
  isLoading: false,
  error: '',
  data: null,
};

const Home: NextPage = () => {
  //
  const [state, dispatch] = useReducer<Reducer<APIResultType<IMovies>,
    APIStateAction<IMovies>>>(APIReducer, initialState);
  const { data, isLoading, error } = state;
  useEffect(() => {
    dispatch({ type: APIActions.SET_LOADING });
    getAllMovies().then((response) => {
      console.log('response', response);
      dispatch({ type: APIActions.SET_SUCCESS, payload: { data: response } });
    }).catch(e => {
      console.log('error', e);
      dispatch({
        type: APIActions.SET_ERROR,
        payload: { error: 'There was an error while loading the item' },
      });
    });
  }, [])
  return (
    <div>
      <Head>
        <title>The movie database</title>
        <meta name="description" content="Data provided by TMDb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout className="pt-28 pl-64">
        <h1>Movies</h1>
        {isLoading && (
          <p>Cargando</p>
        )}
        {data && (
          <div>
            {data.results.map((movie) => (
              movie.title
            ))}
          </div>
        )}
      </AppLayout>

    </div>
  )
}

export default Home;
