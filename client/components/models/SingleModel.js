import React from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../../utils';
import { addToCart } from '../../store/redux/cart';

class SingleModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auto: {
        model: '',
        description: '',
        price: 0,
        image: '',
      },
      basket: [],
    };
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidUpdate() {
    //console.log('didUpdate ', this.state);
  }
  componentDidMount() {
    //console.log('did', this.state);
    const model = this.props.products.find(
      (e) => e.id === this.props.match.params.id * 1
    );
    if (model) {
      this.setState({
        auto: {
          model: model.model,
          description: model.description,
          price: model.price,
          image: model.image,
          id: this.props.match.params.id * 1
        },
      });
    }
  }

  handleClick (auto, id) {
    this.props.addToCart(auto, id);
  }


  render() {
    
    const { model, description, price, image } = this.state.auto;
    const mulah = moneyFormatter.format(price);
    const { auto } = this.state;
    // console.log('render ', auto.id);
    // console.log('render ', this.state);
    return (
      <div className="single-car">
        <div className="inner">
          <div className="image-is-64x64">
            <img src={`../${image}`} alt={model}></img>
          </div>
          <div className="single-model">{model}</div>
          <div className="single-description">{description}</div>
          <div className="single-price">{mulah}</div>
        </div>
        <button
          className="add-car-cart"
          onClick={() =>
            this.handleClick( auto, this.props.match.params.id * 1 )
          }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};
const mapDispatchToProps = (dispatch) => {
  return { addToCart: (product, id) => dispatch(addToCart(product, id)) } ;
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleModel);
