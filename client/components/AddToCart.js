import React, { Component }  from 'react'
import {connect} from 'react-redux'
import { addToCart } from '../store/redux/cart'

class AddToCart extends Component {
	constructor(){
		super()
		this.state = {
			clicked: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	async handleClick(event, product){
		event.preventDefault()
		await this.props.addItemToCart(product)
		this.setState({
			clicked: true
		})
	}

	render(){
		return (
				<div>
				<button  disabled={!this.props.product.quantity} onClick={(event) => this.handleClick(event, this.props.product)}>Add To Cart</button>
				{ this.state.clicked && <div >Added To Cart!</div> }
				</div>
			)
	}
}

const mapDispatch = dispatch => {
	return {
		addItemToCart: (product) => dispatch(addToCart(product))
	}
}

export default connect(null, mapDispatch)(AddToCart)