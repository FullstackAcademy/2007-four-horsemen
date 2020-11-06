import React from 'react';
import { connect } from 'react-redux';

class AddProduct extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            description:'',
            price:'',
            image:''        }
        this.add = this.add.bind(this)
    
    }
    add(ev){
       
    }
    
    render(){
        return(
            <div>
                <p>Add New Model</p>
                <form onSubmit = {this.add}>
                    <input value = {} onChange = {ev=> this.setState({})}/>
                    <button disabled = {}>Add Product</button>
                </form>
            </div>
        )
    }
    
}


const mapStateToProps = () => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }};
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);