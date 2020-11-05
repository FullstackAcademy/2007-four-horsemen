import axios from 'axios';

const SET_ALLORDERS = 'SET_ALLORDERS';

export const setAllOrders = (orders) => {
  return {
    type: SET_ALLORDERS,
    orders,
  };
};

export const fetchAllOrders = () => {
  try {
    return async (dispatch) => {
      const orders = await axios.get('/api/orders/');
      dispatch(setAllOrders(orders.data));
      } catch (err) {
        console.log(err);
      }
    };
  } catch (err) {
    console.log(err);
  }
};
/////////fetch all orders for admins

const SET_MYORDERS = 'SET_MYORDERS';

export const setMyOrders = (orders) => {
  return {
    type: SET_MYORDERS,
    orders,
  };
};

export const fetchMyOrders = (id) => {
  try {
    return async (dispatch) => {
      const orders = await axios.get(`/api/orders//myorders${id}`);
      dispatch(setMyOrders(orders.data));
    };
  } catch (err) {
    console.log(err);
  }
};

export default function ordersReducer(state = [], action) {
  if (action.type === SET_ALLORDERS) {
    return action.orders;
  }
  if (action.type === SET_MYORDERS) {
    return action.orders;
  }
  return state;
}
