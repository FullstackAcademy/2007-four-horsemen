import React from 'react';

const Model = (props) => {
  const model = props.product;

  return (
    <div>
      <figure className="image is-64x64">
        <img src={'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/s/s_gateway_urus_02_m.jpg'} alt={model.model} />
      </figure>
      <div>{model.model}</div>
      <div>{model.price}</div>
    </div>
  );
};
export default Model;
