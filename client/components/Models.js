import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Model from './Model'

class Models extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
      const {products}=this.props;
      console.log(this.props)

return (
  <div>
      {products.length?
          <div >
              
              {
                  products.map(product => {
                      return(
                          <Model  key={product.id} product={product}/>
                      )
                      })
              }
             
          </div>
          :<div>
          <h3>DataBase is empty</h3>
        </div>
          }                                     
  </div>
)
  }
  }

  const mapStateToProps = ({products}) => {
    return {products};
  };
  
  
  
  export default connect(mapStateToProps)(Models);

