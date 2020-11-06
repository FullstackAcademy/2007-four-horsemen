import axios from 'axios';

////////////ACTION TYPE/////////////////
const ADD_TO_CART = 'ADD_TO_CART';

const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY';

//////////ACTION CREATORS//////////////
export const addToCart = (product, id) => {
  return {
    type: ADD_TO_CART,
    product,
    id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const subtractQuantity = (id) => {
  return {
    type: SUBTRACT_QUANTITY,
    id,
  };
};

////////////////////////////CART REDUCER///////////////////////
const initialState = {
  items: [],
  addedProducts: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  let { addedProducts, items, total } = state;

  if (action.type === ADD_TO_CART) {
    let existedProduct = addedProducts.find(
      (p) => p.id === action.product.id * 1
    );

    if (!existedProduct) {
      action.product.quantity = 1;

      console.log(action.product);
      return {
        ...state,
        addedProducts: [...addedProducts, action.product],
        items: [...items, action.product],
        total: state.total + action.product.price,
      };
    } else {
      action.product.quantity += 1;
      let newTotal = state.total + action.product.price;

      return {
        ...state,
        addedProducts: [...addedProducts, action.product],
        total: newTotal,
      };
    }
  }

  if (action.type == REMOVE_FROM_CART) {
    let removeProduct = addedProducts.find((p) => p.id === action.id);
    let updateProducts = addedProducts.filter((p) => p.id !== action.id);
    let updateTotal = total - removeProduct.price * removeProduct.quantity;

    return {
      items,
      addedProducts: updateProducts,
      total: updateTotal,
    };
  }

  return state;
}
// export const GET_CART_ITEMS = 'GET_CART_ITEMS';
// const UPDATE_CART = 'UPDATE_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// const getCartItems = (cartItems) => ({
//   type: GET_CART_ITEMS,
//   cartItems,
// });

// export const loadingCart = () => ({
//   type: LOADING_CART,
// });

// const updateCart = (cart) => ({
//   type: UPDATE_CART,
//   cart,
// });

// const remove = (productId) => ({
//   type: REMOVE_FROM_CART,
//   productId,
// });

// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await axios.get('/api/cart');
//     dispatch(getCartItems(res.data));
//   } catch (err) {
//     //dispatch(cartError());
//     console.log(err);
//   }
// };

// export const addItemToCart = (cartItem) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(`/api/orders`, cartItem);
//     dispatch(updateCart(data));
//   } catch (err) {
//     dispatch(cartError());
//   }
// };

// export const quantityOfProducts = (productId, quantity) => async (dispatch) => {
//   try {
//     const response = await axios.put(`/api/cart/${productId}`, {
//       quantity: quantity,
//     });
//     const updated = response.data;
//     dispatch(updateCart(updated));
//   } catch (err) {
//     dispatch(cartError());
//   }
// };

// export const removeFromCart = (productId) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/cart/${productId}`);
//     dispatch(remove(productId));
//   } catch (err) {
//     dispatch(cartError());
//   }
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GET_CART_ITEMS: {
//       return { ...state, cart: action.cartItems };
//     }
//     case UPDATE_CART: {
//       return { ...state, cart: action.cart };
//     }
//     case REMOVE_FROM_CART: {
//       return {
//         ...state,
//         cart: state.cart.filter(
//           (entry) => entry.productId !== action.productId
//         ),
//       };
//     }

//     default:
//       return state;
//   }
// }
