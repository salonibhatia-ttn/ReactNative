import {ActionTypes} from './types';
const intialState = {
  products: [],
  loading: true,
};
const productDetailState = {
  loading: true,
  detail: {},
};

export const productsReducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const selectedProductsReducer = (
  state = productDetailState,
  {type, payload},
) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state, ...payload, loading: false};
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {...state, loading: true};

    default:
      return state;
  }
};
