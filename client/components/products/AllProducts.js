import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/redux/products';
import { addToCart } from '../../store/redux/cart';
import singleProductReducer from '../../store/redux/singleProduct';
import { moneyFormatter } from '../../utils';
import Product from './Product';

class AllProducts extends React.Component {
  render() {
    console.log(window.localStorage)
    
    return (
      <div>
        {this.props.products.length ? (
          <div className="cars">
            {this.props.products.map((product) => {
              
              
              return (
                <li key={product.id}>
                  <div>
                    <div className="image-is-64x64">
                      <img
                        className="hot-cars"
                        src={product.image}
                        alt={product.name}
                      ></img>
                    </div>
                    <div className="hot-car-name">{product.name}</div>
                    <div className="hot-car-money">
                      {moneyFormatter.format(product.price)}
                    </div>
                    <button
                      className="add-car-cart"
                      onClick={(id) => window.localStorage.setItem('cart', JSON.stringify(product) )}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
        ) : (
          <div>
            <h3>No Car</h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
