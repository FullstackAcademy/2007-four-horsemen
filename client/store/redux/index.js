import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import usersReducer from './users';
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
