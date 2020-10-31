import React from 'react';
import { moneyFormatter } from '../../utils';

const Model = (props) => {
  const model = props.product;
  const pic = model.image;
  const mulah = moneyFormatter.format(model.price);
  if (!model) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="image-is-64x64">
        <img className = 'hot-cars' src={pic} alt={model.model}></img>
      </div>
      <div className='hot-car-name'>{model.model}</div>
      <div className='hot-car-money'>{mulah}</div>
    </div>
  );
};
export default Model;
