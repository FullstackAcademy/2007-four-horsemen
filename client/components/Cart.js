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
  constructor(props) {
    super(props);
    console.log('super', props);
    this.state = {
      addedProducts: props.cart.addedProducts,
    };
  }

  componentDidMount() {
    const { addedProducts } = this.props.cart;
    console.log(addedProducts);
    console.log('cDm ', this.props.cart.addedProducts);
    //this.setState({ addedProducts: addedProducts })
    console.log('setSTate ', this.state);
  }
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

    // console.log('render in Cart ', this.props);
    // const arr = [];
    // let cartOrder = cart.addedProducts.length ? (
    //   cart.addedProducts.map((p) => {
    //     if (!arr.includes(p.id)) {
    //       arr.push(p.id);

    //       return (
    //         <li className="Cart-item" key={p.id}>
    //           <div className="Cart-item-image">
    //             <img className="Cart-image" src={p.image} alt={p.model} />
    //           </div>
    //           <div className="Cart-item-desc">
    //             <p>{p.model}</p>
    //             <p>
    //               <b>Price: {moneyFormatter.format(p.price)}</b>
    //             </p>
    //             <p>
    //               <b>Quantity: {p.quantity}</b>
    //             </p>
    //             <div className="Cart-plus-minus-qty">
    //               <Link to="/cart">
    //                 <i
    //                   onClick={() => {
    //                     this._addQuantity(p.id);
    //                   }}
    //                 >
    //                   [ + ]
    //                 </i>
    //               </Link>
    //               <Link to="/cart">
    //                 <i
    //                   onClick={() => {
    //                     this._subtractQuantity(p.id);
    //                   }}
    //                 >
    //                   [ - ]
    //                 </i>
    //               </Link>
    //             </div>
    //             <button
    //               className="Cart-remove-bttn"
    //               onClick={() => {
    //                 this._removeFromCart(p.id);
    //               }}
    //             >
    //               Remove
    //             </button>
    //           </div>
    //         </li>
    //       );
    //     }
    //   })
    // ) : (
    //   <p>Empty</p>
    // );

    return (
      <div className="Cart-container">
        <div>
          <h3>Your Order:</h3>
          <div className="Cart-item-image">
            <img className="Cart-image" src={cart.image} alt={cart.model} />
          </div>
          <div className="Cart-item-desc">
            <p>{cart.model}</p>
            <p>
              <b>Price: {moneyFormatter.format(cart.price)}</b>
            </p>
            <p>
              <b>Quantity: {cart.quantity}</b>
            </p>
            <div className="Cart-plus-minus-qty">
              <Link to="/cart">
                <i
                  onClick={() => {
                    this._addQuantity(cart.id);
                  }}
                >
                  [ + ]
                </i>
              </Link>
              <Link to="/cart">
                <i
                  onClick={() => {
                    this._subtractQuantity(cart.id);
                  }}
                >
                  [ - ]
                </i>
              </Link>
            </div>
            <button
              className="Cart-remove-bttn"
              onClick={() => {
                this._removeFromCart(cart.id);
              }}
            >
              Remove
            </button>
          </div>
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
