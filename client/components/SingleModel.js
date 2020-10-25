import React from 'react'
import { connect } from 'react-redux';

class SingleModel extends React.Component{
    constructor(){
        super()
        this.state = {
            model:'',
            description:'',
            price:0,
            image:''
        }
    }
    componentDidMount(){
        const model = this.props.products.find(e => e.id === this.props.match.params.id*1)
        this.setState({
            model: model.model,
            description: model.description,
            price: model.price,
            image: model.image
        })
    }
    render(){
        console.log(this.state)
        const {model,description,price,image} = this.state
        return(
            <div>
            <figure className="image is-64x64">
              <img
                src={image}
                alt={model}
              />
            </figure>
            <div>{model}</div>
            <div>{description}</div>
            <div>{price}</div>
            </div>

        )
    }
}
const mapStateToProps = ({products}) => {
    return {products};
  };
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SingleModel);