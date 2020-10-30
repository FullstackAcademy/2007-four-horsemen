import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users';
import Cart  from './cart'



const appReducer = combineReducers({
    products: productsReducer,
    user:usersReducer,
    cart:Cart
  });
  export default appReducer;
  


