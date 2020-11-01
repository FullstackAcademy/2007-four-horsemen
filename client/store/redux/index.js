import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';

const appReducer = combineReducers({
  product: singleProductReducer,
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer,
});
export default appReducer;
