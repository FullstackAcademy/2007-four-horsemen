import axios from 'axios';


const initialState = {

  cart: [],
};





export const GET_CART_ITEMS = 'GET_CART_ITEMS';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


const getCartItems = (cartItems) => ({
  type: GET_CART_ITEMS,
  cartItems,
});

export const loadingCart = () => ({
  type: LOADING_CART,
});

const updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

const remove = (productId) => ({
  type: REMOVE_FROM_CART,
  productId,
});

export const fetchCart = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/cart');
    dispatch(getCartItems(res.data));
  } catch (err) {
    dispatch(cartError());
    console.log(err);
  }
};

export const addItemToCart = (cartItem) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/orders`, cartItem);
    dispatch(updateCart(data));
  } catch (err) {
    dispatch(cartError());
  }
};

export const quantityOfProducts = (productId, quantity) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/cart/${productId}`, {
      quantity: quantity,
    });
    const updated = response.data;
    dispatch(updateCart(updated));
  } catch (err) {
    dispatch(cartError());
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    await axios.delete(`/api/cart/${productId}`);
    dispatch(remove(productId));
  } catch (err) {
    dispatch(cartError());
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART_ITEMS: {
      return { ...state, cart: action.cartItems };

    }
    case UPDATE_CART: {
      return { ...state, cart: action.cart };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(
          (entry) => entry.productId !== action.productId
        ),
      };
    }


    default:
      return state;
  }




