import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users';
import cartReducer from './cart';

const appReducer = combineReducers({
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer
});
export default appReducer;

