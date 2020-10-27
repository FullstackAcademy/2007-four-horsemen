import React from 'react';
import { connect } from 'react-redux';

class SingleModel extends React.Component {
  constructor() {
    super();
    this.state = {
      model: '',
      description: '',
      price: 0,
      image: '',
    };
  }
  componentDidMount() {
    const model = this.props.products.find(
      (e) => e.id === this.props.match.params.id * 1
    );
    this.setState({
      model: model.model,
      description: model.description,
      price: model.price,
      image: model.image,
    });
  }
  render() {
    //console.log('Hi ',this.state)
    const { model, description, price, image } = this.state;
    console.log(image)
    return (
      <div className='single-car'>
        <div className='inner'>
          <figure className="image is-64x64">
            <img src={image} alt={model} />
          </figure>
          <div className='single-model'>{model}</div>
          <div className='single-description'>{description}</div>
          <div className='single-price'>${price}</div>
        </div>
        <button className='add-car-cart'>Add to Cart</button>
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return { products };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleModel);
