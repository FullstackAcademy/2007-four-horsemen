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
  //console.log(state.addedProducts);
  if (action.type === ADD_TO_CART) {
    let theProduct = action.product;
    let existedProduct = state.addedProducts.find(
      (p) => p.id === action.id * 1
    );

    if (!existedProduct) {
      theProduct.quantity = 1;
      //theProduct.quantity ? theProduct.quantity += 1 : theProduct.quantity = 1;
      return {
        // ...state,
        addedProducts: [...addedProducts, theProduct],
        items: [...items, theProduct],
        total: state.total + theProduct.price,
      };
    } else {
      //console.log('bolony');
      theProduct.quantity += 1;
      let newTotal = state.total + theProduct.price;

      return {
        ...state,
        addedProducts: [...state.addedProducts, theProduct],
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

  if (action.type === ADD_QUANTITY) {
    let addQty = addedProducts.find((p) => p.id === action.id);
    addQty.quantity++;
    let updateTotal = state.total + addQty.price;
    console.log('reducer ', updateTotal);
    return { ...state, total: updateTotal };
  }

  if (action.type === SUBTRACT_QUANTITY) {
    let subQty = addedProducts.find((p) => p.id === action.id);
    subQty.quantity === 0 ? (subQty.quantity = 0) : subQty.quantity--;

    let updateTotal = state.total - subQty;

    return { ...state, total: updateTotal };
  }

  return state;
}
