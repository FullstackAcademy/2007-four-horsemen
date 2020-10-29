import { combineReducers } from 'redux';
import productsReducer from './products';
import usersReducer from './users'

const appReducer = combineReducers({
  products: productsReducer,
  user: usersReducer
});
export default appReducer;
