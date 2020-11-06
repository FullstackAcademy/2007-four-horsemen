import React from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../../utils';
import { addToCart } from '../../store/redux/cart';
import { fetchSingleProduct } from '../../store/redux/singleProduct';
import { setSingleUser } from '../../store/redux/users';
import { getReviews } from '../../store/redux/reviews';
import ReviewForm from '../ReviewForm';
import ReviewsList from '../ReviewsList';
import Rating from '../Rating';

class SingleProduct extends React.Component {
  async componentDidMount() {
    await Promise.all[
      (this.props.getProduct(this.props.match.params.id),
      this.props.getUser(),
      this.props.getReviews())
    ];
  }

  render() {
    const { product, reviews } = this.props;
    const { name, description, price, image } = this.props.product;
    const { addToCart } = this.props;
    const priceInUsd = moneyFormatter.format(price);
    return (
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img className="single-car" src={image} alt={name}></img>
          </div>
          <div className="box">
            <div className="row">
              <h2>{name}</h2>
            </div>
            <p>
              <span>
                <Rating totalStars={5} />
              </span>
            </p>
            <p>
              <span>({reviews.length} customer reviews)</span>
            </p>
            <p>{description}</p>
            <h4>
              <span>{priceInUsd}</span>
            </h4>
            <button className="cart" onClick={(id) => addToCart(product, id)}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="review-form">
          {this.props.user.length !== 0 && (
            <ReviewForm
              productId={this.props.match.params.id}
              userId={this.props.user.id}
            />
          )}
        </div>
        <div className="reviews-list">
          <h3>Reviews: </h3>
          <hr />
          <ReviewsList
            reviews={reviews}
            productId={this.props.match.params.id}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product, user, reviews }) => {
  return { product, user, reviews };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (product, id) => dispatch(addToCart(product, id)),
    getUser: () => dispatch(setSingleUser()),
    getReviews: () => dispatch(getReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
