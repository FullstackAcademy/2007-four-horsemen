import React from 'react';
import { moneyFormatter } from '../../utils';

const Product = (props) => {
  const { name, image, price } = props.product;
  const priceInUsd = moneyFormatter.format(price);
  if (!name) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="image-is-64x64">
        <img className="hot-cars" src={image} alt={name}></img>
      </div>
      <div className="hot-car-name">{name}</div>
      <div className="hot-car-money">{priceInUsd}</div>
    </div>
  );
};
export default Product;
