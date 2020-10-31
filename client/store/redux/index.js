import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';

const appReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer,
});
export default appReducer;
