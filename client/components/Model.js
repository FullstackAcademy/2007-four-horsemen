import React from 'react';
import {moneyFormatter} from '../utils';
console.log(moneyFormatter)

const Model = (props, product) => {
  const model = props.product;
  const pic = model.image;
  const mulah = moneyFormatter.format(model.price)
  console.log(mulah)
  //console.log('hi ', product.image);
  if(!model){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <div>
      <div className="image-is-64x64">
      <img src={pic} alt={model.model}></img>
      </div>
      <div>{model.model}</div>
      <div>{mulah}</div>
    </div>
  );
};
export default Model;
