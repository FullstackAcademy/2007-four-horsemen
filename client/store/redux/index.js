import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import usersReducer from './users';
import singleProductReducer from './singleProduct';
import ordersReducer from './orders';
import productReviewsReducer from './reviews';

const appReducer = combineReducers({
  product: singleProductReducer,
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer,
  orders: ordersReducer,
  reviews: productReviewsReducer,
});
export default appReducer;
