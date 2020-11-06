import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../utils';
import { Link } from 'react-router-dom';
// import {
//   removeFromCart,
//   addQuantity,
//   subtractQuantity,
// } from '../store/redux/cart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const cart = JSON.parse(window.localStorage.getItem('cart'));
    this.setState({ cart });
  }

  _removeFromCart(id) {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  }

  _addQuantity(p) {
    let updateProduct = this.state.cart.map((car) => {
      if (car.id === p.id) {
        car.inventory_quantity += 1;
        return car;
      }
      return car;
    });
    this.setState({ cart: updateProduct });
    window.localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  _subtractQuantity(p) {
    let minusQty = this.state.cart.map((car) => {
      if (car.id === p.id) {
        car.inventory_quantity === 0 ? 0 : (car.inventory_quantity -= 1);
        return car;
      }
      return car;
    });
    this.setState({ car: minusQty });
    window.localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  render() {
    
    const cart = JSON.parse(window.localStorage.getItem('cart'));
    const arr = [];


    let cartOrder = cart.length ? (
      cart.map((p) => {

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
                        this._addQuantity(p);
                      }}
                    >
                      [ + ]
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      onClick={() => {
                        this._subtractQuantity(p);
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
                      this._removeFromCart(p.id);
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
          <h3>Items in Cart:</h3>
          <ul>{cartOrder}</ul>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = ({ cart }) => {
//   return {
//     cart,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuantity: (id) => dispatch(addQuantity(id)),
//     subtractQuantity: (id) => dispatch(subtractQuantity(id)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };

export default connect()(Cart);
