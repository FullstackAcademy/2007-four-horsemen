import axios from 'axios';

const SET_PRODUCT = 'SET_PRODUCT';

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(setProduct(data));
    };
  } catch (err) {
    console.log(err);
  }
};

export default function singleProductReducer(state = [], action) {
  if (action.type === SET_PRODUCT) {
    return action.product;
  }
  return state;
}
