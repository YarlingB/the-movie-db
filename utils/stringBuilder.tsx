import {IMAGE_SIZE, BASE_IMG_URL, MOVIES_LIST} from './stringLiterals';

type StrBuilderType = {
  type: string,
  offset?: string,
  filter?: string,
  filterValue?: string
}

export const apiURLBuilder = ({type, offset = '0', filter = '', filterValue}:StrBuilderType) => {
  let endpoint = '';
  let filterBy = '';
  if (filter !== '') {
    filterBy = `&${filter}=${filterValue}`;
    filterBy = filterBy.trim();
  }
  if (type === 'movies') {
    endpoint = `${MOVIES_LIST}`;
    return endpoint;
  }
  return endpoint;
};

export const imageSizeBuilder = (size:string, filePath:string):string => {
  let finalURL;
  if (size === IMAGE_SIZE.w500){
    finalURL = `${BASE_IMG_URL}${size}/${filePath}`;
    return finalURL;
  }
  finalURL = `${BASE_IMG_URL}${IMAGE_SIZE.original}/${filePath}`;
  return finalURL;
};

