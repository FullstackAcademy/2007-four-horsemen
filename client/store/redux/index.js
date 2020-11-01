import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import usersReducer from './users';

const appReducer = combineReducers({
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer
});
export default appReducer;
