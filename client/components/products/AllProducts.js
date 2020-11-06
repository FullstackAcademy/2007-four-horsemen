import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/redux/products';
import { addToCart } from '../../store/redux/cart';
import singleProductReducer from '../../store/redux/singleProduct';
import { moneyFormatter } from '../../utils';
import Product from './Product';
import SingleProduct from './SingleProduct';

class AllProducts extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cart:[]
    }
  }


  render() {
    
    const {cart} = this.state;
    
    return (
      <div>
        {this.props.products.length ? (
          <div className="cars">
            {this.props.products.map((product) => {
              return (
                <li key={product.id}>
                  <div>
                    <div className="image-is-64x64">
                    <NavLink to={`/models/${product.id}`}>
                      <img
                        className="hot-cars"
                        src={product.image}
                        alt={product.name}
                      ></img>
                      </NavLink>
                    </div>
                    <div className="hot-car-name">{product.name}</div>
                    <div className="hot-car-money">
                      {moneyFormatter.format(product.price)}
                    </div>
                    <div className="add-car-div">
                      <button
                        className="add-car-cart"
                        onClick={(id) =>
                          this.setState({cart:[...cart, product]})
                        }
                      >
                        Add to Cart
                      </button>
                      <button className="add-car-cart" 
                      onClick={() => window.localStorage.setItem('cart', JSON.stringify(cart))}
                      >Cart Ready</button>
                    </div>
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
