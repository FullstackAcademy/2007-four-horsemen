import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const fetchProducts = () => {
  try {
    return async (dispatch) => {
      const products = await axios.get('/api/products');
      dispatch(setProducts(products.data));
    };
  } catch (err) {
    console.log(err);
  }
};

export default function productsReducer(state = [], action) {
  if (action.type === SET_PRODUCTS) {
    return action.products;
  }
  return state;
}
