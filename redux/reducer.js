import {ActionTypes} from './types';
const intialState = {
  products: [],
  filteredProducts: [],
  categories: [],
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
        filteredProducts: payload,
      };
    case ActionTypes.FETCH_PRODUCTS:
      const cats = payload
        .map(item => item.category)
        .filter((item, index, arr) => arr.indexOf(item) === index);
      console.log(33, cats);
      return {
        ...state,
        products: payload,
        filteredProducts: payload,
        categories: cats,
        loading: false,
      };
    case 'SET_CATEGORIES':
      return {...state, categories: payload};
    case 'FILTER_PRODUCTS':
      if (payload === 'Filter') {
        return {...state, products: state.filteredProducts};
      } else {
        const prods = state.filteredProducts.filter(
          item => item.category === payload,
        );
        console.log(44, prods);
        return {...state, products: prods};
      }
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
