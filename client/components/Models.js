import React from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from '../store/redux/products'
import {Link} from 'react-router-dom'

export class Models extends React.Component {
    componentDidMount(){
      this.props.getProducts()
    }
  
    render() {
      console.log(this.props)
      return <div>
        <nav>Here is Models page</nav>
        </div>
  }
  }


  const mapState = ({products}) => {
    return {products};
  };
  
  const mapDispatch = (dispatch) => {
    return {
      getProducts: ()=> dispatch(fetchProducts()),
    };
  };
  
  export default connect(mapState, mapDispatch)(Models);