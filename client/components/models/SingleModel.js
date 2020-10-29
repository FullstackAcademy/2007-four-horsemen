import React from 'react';
import { connect } from 'react-redux';

class SingleModel extends React.Component {
  constructor(props) {
    super(props);
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
    if(model){
    this.setState({
      model: model.model,
      description: model.description,
      price: model.price,
      image: model.image,
    });
  }
  }
  render() {

    const { model, description, price, image } = this.state;

    return (
      <div className='single-car'>
        <div className='inner'>
          <figure className="image is-64x64">
            <img src={`https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/s/s_gateway_urus_02_m.jpg`} alt={model} />
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
