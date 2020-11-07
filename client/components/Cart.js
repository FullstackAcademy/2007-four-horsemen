import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../utils';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
} from '../store/redux/cart';

class Cart extends Component {

  removeFCart(id) {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  }

  addQty(id) {

    const { addQuantity } = this.props;
    addQuantity(id);
  }

  subtractQty(id) {
    const { subtractQuantity } = this.props;
    subtractQuantity(id);
  }

  render() {
    const { cart } = this.props;
    const arr = [];
    const cartOrder = cart.addedProducts.length ? (
      cart.addedProducts.map((p) => {
        if (!arr.includes(p.id)) {
          arr.push(p.id);
          return (
            <li className="Cart-item" key={p.id}>
              <Link to="/checkout">
                <button>Proceed To Checkout</button>
              </Link>
              <div className="Cart-item-image">
                <img className="Cart-image" src={p.image} alt={p.model} />
              </div>
              <div className="Cart-item-info">
                <p className="hot-car-cart-name">
                  <b>{p.name}</b>
                </p>
                <p className="hot-car-cart-price">
                  <b>Price: {moneyFormatter.format(p.price)}</b>
                </p>
                <p className="hot-car-cart-quantity">
                  <b>Quantity: {p.inventory_quantity}</b>
                </p>
                <div className="Cart-plus-minus-qty">
                  <Link to="/cart">
                    <i
                      onClick={() => {
                        this.addQty(p);
                      }}
                    >
                      [ + ]
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      onClick={() => {
                        this.subtractQty(p);
                      }}
                    >
                      [ - ]
                    </i>
                  </Link>
                </div>
                <div className="Cart-remove-bttn-div">
                  <button
                    className="Cart-remove-bttn"
                    onClick={() => {
                      this.removeFCart(p.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          );
        }
      })
    ) : (
      <p>Empty</p>
    );

    return (
      <div className="Cart-container">
        <div>
          <h3>Your Order:</h3>
          <ul>{cartOrder}</ul>
          <Link to="/checkout">
            <button>Proceed To Checkout</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id) => dispatch(addQuantity(id)),
    subtractQuantity: (id) => dispatch(subtractQuantity(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
