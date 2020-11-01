import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeNewOrder, clearCart } from '../store'
import Payment from './Payment';

const CheckoutView = (props) => {
  const { handleSubmit, successPayment } =props
 const cart = props.cart.product

 

  return (
    <div >
      

      <div>
        <div >
          <h2 >Complete Your Order</h2>
          <div >

            <div >
              {props.cart.length && props.cart.map((element, index) => (

                <div key={element.id} >
                  <div >
                    <img src={element.product.image} />
                  </div>
                  <div >
                    <h4 >{element.product.name}</h4>
                    <p>
                      
                      Subtotal: ${element.product.price * 1}
                    </p>
                  </div>
                </div>

              ))}

            </div>

            <div >
              <p >Enter your details below!<br />
              </p>
              <form onSubmit={e => handleSubmit(e, props.user.id, props.cart)} >
                <div >
                  <label > Name</label>
                  <input type="text" />
                </div>

                <div >
                  <label > Email</label>
                  <input type="email" />
                </div>
                <br />
                <div >
                  <label > Address</label>
                  <input type="text"  />
                </div>
                <div>
                  <label > Phone</label>
                  <input type="text" />
                </div>
                <br />
               
               

                <Payment
                  name={'Confirm purchase'}
                  description={"This is only a test page, enter 4242 4242 4242 4242 for credit card"}
                  //amount={props.cart.map(el => el.product.price * 1).reduce((a,b) => a+b, 0)}
                  successPayment={successPayment}
                />
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => {
    return {
        handleSubmit (ev, userid, cart) {
            ev.preventDefault()
            //submitting card with this data
            let {name, email, address, phone } = ev.target;
            //[name, email, address, phone] = [name, email, address, phone].map(x => x.value)
            
            let order = {
                //status: 'CREATED', 
                items: cart.map((element, index) => ({
                    product: element.product, 
                    price: element.product.price
                })),
                name, email, address, phone
            }
            dispatch(makeNewOrder(userid, order))
            
        },
        successPayment() {
          alert('Payment Successful');
          dispatch(clearCart())
        }
    }
}

const mapState = (state) => {
  return {
    cart: state.cart,
    user: state.user
  }
}

export default connect(mapState, mapDispatch)(CheckoutView)

