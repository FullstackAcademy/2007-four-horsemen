import { combineReducers } from 'redux';

import Cart  from './cart'


import productsReducer from './products'
const appReducer = combineReducers({
    products: productsReducer,
    cart:Cart
  });
  export default appReducer;
  

