import {APIActions} from '../reducers/actions';

export type APIResultType<T> = {
  data: T | null;
  isLoading: boolean;
  error: string;
};

export type APIStateAction<T> =
  | {type: APIActions.SET_LOADING}
  | {type: APIActions.SET_SUCCESS; payload: {data: T}}
  | {type: APIActions.SET_ERROR; payload: {error: string}};