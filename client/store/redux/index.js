import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';
<<<<<<< HEAD
import OrdersReducer from './orders'
=======
>>>>>>> f7386cbab558d79378c18d30bda996f721c08c16

const appReducer = combineReducers({
  product: singleProductReducer,
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer,
<<<<<<< HEAD
  orders: OrdersReducer,
=======
>>>>>>> f7386cbab558d79378c18d30bda996f721c08c16
});
export default appReducer;
