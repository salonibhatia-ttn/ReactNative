import fakestoreapi from '../apis/fakeStoreApi';
import {ActionTypes} from './types';

export const fetchProducts = () => async dispatch => {
  const response = await fakestoreapi.get('/products');
  dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data});
};

export const fetchProduct = id => async dispatch => {
  const response = await fakestoreapi.get(`/products/${id}`);
  dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data});
};
export const filterProducts = filterBy => {
  return {
    type: 'FILTER_PRODUCTS',
    payload: filterBy,
  };
};

export const selectedProduct = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
