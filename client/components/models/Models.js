import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../store/redux/products';
import Model from './Model';

class Models extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div >
        {this.props.products.length ? (
          <div className="cars">
            {this.props.products.map((product) => {
              return (
                <Link product={product} key={product.id}to={`/models/${product.id}`}>
                  <Model product={product} />
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Models);
