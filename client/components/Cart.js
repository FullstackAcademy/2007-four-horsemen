import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../utils';
class Cart extends Component {
  render() {
    const { cart } = this.props;
    //console.log('render in Cart ', this.props)
    const arr = [];
    let cartOrder = cart.addedProducts.length ? (
      
      cart.addedProducts.map((p) => {
        if(!arr.includes(p.id)){
        arr.push(p.id);
        
        return (
          <li className="Cart-item" key={p.id}>
            <div className="Cart-item-image">
              <img className="Cart-image" src={p.image} alt={p.model} />
            </div>
            <div className="Cart-item-desc">
              <p>{p.model}</p>
              <p>
                <b>Price: {moneyFormatter.format(p.price)}</b>
              </p>
              <p>
                <b>Quantity: {p.quantity}</b>
              </p>
            </div>
          </li>
        );
      }})
    ) : (
      <p>Empty</p>
    );

    return (
      <div>
        <div>
          <h3>Your Order:</h3>
          <ul>
            { cartOrder }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Cart);

// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// //import ProductInCart from './ProductInCart';
// import {
//   fetchCart,
//   quantityOfProducts,
//   addToCart,
//   removeFromCart,
// } from '../store/redux/cart';
// import { fetchProducts } from '../store/redux/products';

// class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cart: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     this.props.setProducts();
//     this.props.fetchCart();
//   }

//   handleChange(event, quantity, productId) {
//     event.preventDefault();
//     this.props.quantityOfProducts(productId, quantity);
//   }

//   handleClick(event, productId) {
//     event.preventDefault();
//     this.props.removeFromCart(productId);
//   }

//   render() {
//     console.log('cart render ', this.props)
//const orderedProducts = this.props.cart//.cart
// const products = this.props.products
//const { products, orderedProducts } = this.props;
//return (<h1>hello</h1>)
// return (
//   <div>
//     <h1>Your orders</h1>
//     <Link to="/checkout">
//       <button>Proceed To Checkout</button>
//     </Link>
//     <ul>
//       {orderedProducts.map((orderedProduct) => (
//         <div key={orderedProduct.productId}>
//           <ProductInCart
//             product={products.find(
//               (product) => product.id === orderedProduct.productId
//             )}
//             porderedProduct={orderedProduct}
//             handleClick={this.handleClick}
//           />
//           <form>
//             <label>Quantity</label>
//             <select
//               onChange={(event) =>
//                 this.handleChange(
//                   event,
//                   event.target.value,
//                   orderedProduct.productId
//                 )
//               }
//             >
//               <option value={product.quantity}>{product.quantity}</option>
//               {[
//                 ...Array(
//                   products.find(
//                     (product) => product.id === orderedProduct.productId
//                   ).quantity + 1
//                 ).keys(),
//               ].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </form>
//         </div>
//       ))}
//     </ul>
//   </div>
// );
//   }
// }

// const mapStateToProps = ({ orderedProducts, products }) => {
//   return {
//     orderedProducts,
//     products,
//     // cart: state.cart,
//     // products: state.product//.list,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCart: () => dispatch(fetchCart()),
//     setProducts: () => dispatch(fetchProducts()),
//     quantityOfProducts: (productId, quantity) =>
//       dispatch(quantityOfProducts(productId, quantity)),
//     removeFromCart: (productId) => dispatch(removeFromCart(productId)),
//   };
// };

//  export default connect()(Cart);
