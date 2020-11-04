import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';
import productReviewsReducer from './reviews';

const appReducer = combineReducers({
  product: singleProductReducer,
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer,
  reviews: productReviewsReducer,
});
export default appReducer;
