import {combineReducers} from 'redux';
import {productsReducer, selectedProductsReducer} from './reducer';
const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default rootReducer;
