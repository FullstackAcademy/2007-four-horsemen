import React from 'react'

 const Model = (props) =>{
    const model = props.product
    console.log(model)
    return(
        <div>
            <figure className="image is-64x64">
              <img
                src={model.image}
                alt={model.model}
              />
            </figure>
            <div>{model.model}</div>
            <div>{model.price}</div>
        </div>


    )
    
}
export default Model