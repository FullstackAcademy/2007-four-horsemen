import React, { useState } from 'react';
import axios from 'axios';

const ViewAllOrders = (props) => {
  const orders = props.orders;
  const [status, setStatus] = useState('');
  const [orderId, setOrderId] = useState('');
  const changeStatus = async (ev) => {
    ev.preventDefault();
    const order_status = status;
    await axios
      .put(`/api/orders/${orderId}`, { order_status })
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ul>
      {orders.map((order) => {
        return (
          <li key={order.id}>
            <div>{order.user.name}'s Order:</div>
            <div>Order Id : {order.id}</div>
            <div>Total : ${order.total}</div>
            <div>Order Data : {order.order_date}</div>
            <div>Shipping Address : {order.shipping_address}</div>
            <label htmlFor="order_status">
              Order Status : {order.order_status}
            </label>
            <form onSubmit={changeStatus}>
              <select onChange={({ target: { value } }) => setStatus(value)}>
                <option value="processing">Processing the Shippment </option>
                <option value="completed">Mark as Completed</option>
                <option value="cancelled">Cancel it </option>
              </select>
              <button onClick={() => setOrderId(order.id)}>Update</button>
            </form>
          </li>
        );
      })}
    </ul>
  );
};
export default ViewAllOrders;
