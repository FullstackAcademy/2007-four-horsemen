import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';
import OrdersReducer from './orders'

const appReducer = combineReducers({
  product: singleProductReducer,
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer,
  orders: OrdersReducer,
});
export default appReducer;
