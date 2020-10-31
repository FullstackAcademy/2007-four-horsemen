import { combineReducers } from 'redux';
import productsReducer from './products';
<<<<<<< HEAD
import usersReducer from './users';
=======
>>>>>>> newcart
import cartReducer from './cart';

const appReducer = combineReducers({
  products: productsReducer,
<<<<<<< HEAD
  user: usersReducer,
  cart: cartReducer
=======
  cart:cartReducer,
>>>>>>> newcart
});
export default appReducer;
