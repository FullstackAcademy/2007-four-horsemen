import React from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../../utils';
import { addToCart } from '../../store/redux/cart';
import { fetchSingleProduct } from '../../store/redux/singleProduct';

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const { product } = this.props;
    const { name, description, price, image } = this.props.product;
    const { addToCart } = this.props;
    const priceInUsd = moneyFormatter.format(price);
    return (
      <div className="single-car">
        <div className="inner">
          <div className="image-is-64x64">
            <img src={image} alt={name}></img>
          </div>
          <div className="single-model">{name}</div>
          <div className="single-description">{description}</div>
          <div className="single-price">{priceInUsd}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product, cart }) => {
  return { product, cart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (product) => dispatch(addToCart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
