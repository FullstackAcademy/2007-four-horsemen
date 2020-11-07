import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/redux/products';
import Product from './Product';

class AllProducts extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.length ? (
          <div className="cars">
            {this.props.products.map((product) => {
              return (
                <NavLink key={product.id} to={`/models/${product.id}`}>
                  <Product product={product} />
                </NavLink>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
