import {APIActions} from './actions';
import {APIResultType, APIStateAction} from '../types/reducer';

const APIReducer = <T>(state: APIResultType<T>, action: APIStateAction<T>) => {
  switch (action.type) {
    case APIActions.SET_LOADING:
      return {
        ...state,
        data: null,
        isLoading: true,
      };

    case APIActions.SET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: '',
      };

    case APIActions.SET_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default APIReducer;