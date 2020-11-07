import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


// import Payment from './Payment';


const CheckoutView = (props) => {
  const { successPayment, cart, user } = props;
  let date = new Date();

  const total = cart.total;
  const order_date = date.toDateString();
  const [shipping_address, setAddress] = useState('');
  const order_status = 'processing';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await axios
      .post('/api/orders', {
        total,
        order_date,
        shipping_address,
        order_status,
        name,
        email,
        phone,
      })
      .then((res) => {
        refreshPage();
      })
      .catch((err) => {
        window.alert('try again!');
      });
  };
  function refreshPage() {
    window.location.reload(false);
    window.location.replace('/');
  }


  return (
    <div className="bodyback">
      <h2>Complete Your Order</h2>
      <div>
        {cart.items.map((p) => (
          <div key={p.id}>
            <div>
              <img src={p.image} />
            </div>
            <div>

              <p>
                Enter your details below!
                <br />
              </p>

              <form onSubmit = {handleSubmit}>
                <div class="input-container">
                <i class="fa fa-user icon"></i>
                  <label> Name</label>
                  <input onChange={({ target: { value } }) => setName(value)}  />
                </div>

                <div class="input-container" >
                <i class="fa fa-envelope icon"></i>
                  <label> Email</label>
                  <input type="email" onChange={({ target: { value } }) => setEmail(value)}  />
                </div>

                <br />
                <div class="input-container">
                <i class="fa fa-home icon"></i>
                  <label> Address</label>
                  <input onChange={({ target: { value } }) => setAddress(value)}  />
                </div>

                <div class="input-container">
                <i class="fa fa-phone icon"></i>
                  <label> Phone</label>
                  <input onChange={({ target: { value } }) => setPhone(value)}  />
                </div>
                <br />
                <div>Grand Total : ${cart.total}</div>
                <button>
                  Checkout
                 </button>
              </form>
            </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = ({ cart, user }) => {
  return {
    cart,
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutView);
