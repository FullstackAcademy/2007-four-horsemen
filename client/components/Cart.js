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
  // constructor(props) {
  //   super(props);
  //   console.log('super', props);
  //   this.state = {
  //     addedProducts: props.cart.addedProducts,
  //   };
  //}

  // componentDidMount() {
  //   const { addedProducts } = this.props.cart;
  //   console.log(addedProducts);
  //   console.log('cDm ', this.props.cart.addedProducts);
  //   //this.setState({ addedProducts: addedProducts })
  //   console.log('setSTate ', this.state);
  // }
  _removeFromCart(id) {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  }

  _addQuantity(id) {
    const { addQuantity } = this.props;
    addQuantity(id);
  }

  _subtractQuantity(id) {
    const { subtractQuantity } = this.props;
    subtractQuantity(id);
  }

  render() {
    //console.log(window.localStorage)
    const cart = JSON.parse(window.localStorage.getItem('cart'));
    console.log('what it is', cart);

    // console.log('render in Cart ', this.props);
    const arr = [];
    let cartOrder = cart.length ? (
      cart.map((p) => {
        if (!arr.includes(p.id)) {
          arr.push(p.id);

          return (
            <li className="Cart-item" key={p.id}>
              <div className="Cart-item-image">
                <img className="Cart-image" src={p.image} alt={p.model} />
              </div>
              <div className="Cart-item-info">
                <p className="hot-car-cart-name">
                  <b>{p.name}</b>
                </p>
                <p className='hot-car-cart-price'>
                  <b>Price: {moneyFormatter.format(p.price)}</b>
                </p>
                <p className='hot-car-cart-quantity'>
                  <b>Quantity: {p.quantity}</b>
                </p>
                <div className="Cart-plus-minus-qty">
                  <Link to="/cart">
                    <i
                      onClick={() => {
                        this._addQuantity(p.id);
                      }}
                    >
                      [ + ]
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      onClick={() => {
                        this._subtractQuantity(p.id);
                      }}
                    >
                      [ - ]
                    </i>
                  </Link>
                </div>
                <div className='Cart-remove-bttn-div'>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id) => dispatch(addQuantity(id)),
    subtractQuantity: (id) => dispatch(subtractQuantity(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
