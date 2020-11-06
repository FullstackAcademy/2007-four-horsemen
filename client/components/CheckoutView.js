
import React from 'react'
import { connect } from 'react-redux'


import Payment from './Payment';

const CheckoutView = (props) => {
  const { handleSubmit, successPayment, cart, product } = props;
  // const [total, setTotal] = useState('');
  // const [order_date, setData] = useState('');
  // const [shipping_address, setAddress] = useState('')
  // const [order_status, setStatus] = useState('processing');
  


  return (
    <div>
      <div>
        <div>
          <h2>Complete Your Order</h2>

          <div>
            <div>
              {
                cart.addedProducts.map((p) => (
                  <div>
                    <div>
                      <img src={p.image} />
                    </div>
                    <div>
                      <h4>{p.model}</h4>
                      <p>Subtotal: ${p.price * 1}</p>
                    </div>
                  </div>
                ))
              }
              {/* <div >
                    <img src={pic} />
                  </div> */}
            </div>

            <div>
              <p>
                Enter your details below!
                <br />
              </p>
              <form
                onSubmit={(e) => handleSubmit(e, props.user.id, props.cart)}
              >
                <div>
                  <label> Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label> Email</label>
                  <input type="email" />
                </div>
                <br />
                <div>
                  <label> Address</label>
                  <input type="text" />
                </div>
                <div>
                  <label> Phone</label>
                  <input type="text" />
                </div>
                <br />

                <Payment
                  name={'Confirm purchase'}
                  description={
                    'This is only a test page, enter 4242 4242 4242 4242 for credit card'
                  }
                  amount={cart.addedProducts
                    .map((p) => p.price * p.quantity)
                    .reduce((a, b) => a + b, 0)} //amount={props.cart.map(el => el.product.price * 1).reduce((a,b) => a+b, 0)}
                  successPayment={successPayment}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(ev, userid, cart) {
      ev.preventDefault();
      //submitting card with this data
      let { name, email, address, phone } = ev.target;
      //[name, email, address, phone] = [name, email, address, phone].map(x => x.value)

      let order = {
        //status: 'CREATED',
        items: cart.addedProducts.map((element) => ({
          product: element.product,
          price: element.product.price,
        })),
        name,
        email,
        address,
        phone,
      };
      dispatch(makeNewOrder(userid, order));
    },
    successPayment() {
      alert('Payment Successful');
      dispatch(clearCart());
    },
  };
};

const mapState = ({ cart, user }) => {
  return {
    cart,
    user,
  };
};

export default connect(mapState, mapDispatch)(CheckoutView);
