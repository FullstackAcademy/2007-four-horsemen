import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductInCart from './ProductInCart';
import { fetchCart,quantityOfProducts,addToCart, removeFromCart } from '../store/redux/cart'
import { fetchProducts } from '../store/redux/products'

class Cart extends React.Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount(){
	  this.props.setProducts()
		this.props.fetchCart()
	}

	handleChange(event,quantity, productId) {
		event.preventDefault()
		this.props.quantityOfProducts(productId,quantity)
	}

	handleClick(event, productId) {
		event.preventDefault()
		this.props.removeFromCart(productId)
	}

	render(){
		//const orderedProducts = this.props.cart//.cart
      // const products = this.props.products
      const{products,orderedProducts}=this.props
		

	return (
	        <div>
				<h1>Your orders</h1>
				<Link to='/checkout'>
					<button>Proceed To Checkout</button>
				</Link>
	            <ul>
	            { orderedProducts.map(orderedProduct =>
	            	
	            		<div key={orderedProduct.productId}>
	            		<ProductInCart product={products.find(product => product.id === orderedProduct.productId)} porderedProduct={orderedProduct} handleClick={this.handleClick} />
	            		<form>
					      <label>Quantity</label>
					      <select  onChange={(event) => this.handleChange(event, event.target.value,orderedProduct.productId)}>
					        <option value={product.quantity}>{product.quantity}</option>
					        {
					          [...Array(products.find(product => product.id === orderedProduct.productId).quantity+1).keys()].map(num => <option key={num} value={num}>{num}</option>)
					        }
						  </select>						  
						</form>
	            		</div>

	            	
	    		)}
	            </ul>
	        </div>
	    )
	}
    
}

const mapStateToProps = ({orderedProducts,products})=> {
	return {
    orderedProducts,
    products
		// cart: state.cart,
		// products: state.product//.list,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCart: () => dispatch(fetchCart()),
		setProducts: () => dispatch(fetchProducts()),
		quantityOfProducts: (productId, quantity) => dispatch(quantityOfProducts(productId, quantity)),
		removeFromCart: (productId) => dispatch(removeFromCart(productId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


// const Cart = (props) => {
//   const products = props.products

//   return (
//     <div className='signup-page'>
//       <div className="page-header header-filter" style={{backgroundImage: "url('http://teddybearpuppydogs.com/wp-content/uploads/2015/08/cute-teddy-bear-puppies.jpg')", backgroundSize: "cover", backgroundPosition: "top center"}}>
//     	  <div className="container">
// 			    <div className="row">
//     			  <div className="col-md-12">

// 					  <div className="card card-signup">
//             				<div className="col-md-12">
// 		                        <div className="table-responsive">
// 		                        <table className="table table-shopping">
// 		                            <thead>
// 		                                <tr>
// 		                                    <th className="text-center"></th>
// 		                                    <th >Product</th>
// 		                                    <th className="th-description">Breed</th>
// 		                                    <th className="text-right">Price</th>
// 		                                    <th className="text-right">Qty</th>
// 		                                    <th className="text-right">Amount</th>
// 		                                    <th></th>
// 		                                </tr>
// 		                            </thead>
// 		                            <tbody>
//                                   {props.cart.length && props.cart.map((element, index) => (
// 		                                <tr key={element.id}>
// 		                                    <td>
// 		                                        <div className="img-container">
// 								  					<Link to={`/products/${element.product.id}`}>
// 		                                            	<img src={element.product.photos[0]} alt="..." />
// 													</Link>
// 		                                        </div>
// 		                                    </td>
// 		                                    <td className="td-name">
// 								  					<Link to={`/products/${element.product.id}`}>
// 		                                        		{element.product.name}
// 													</Link>
// 		                                        <br /><small>from {element.product.breeder}</small>
// 		                                    </td>
// 		                                    <td>
// 		                                        {element.product.breed}
// 		                                    </td>
// 		                                    <td className="td-number">
// 		                                        <small>&#36;</small>{element.product.price}
// 		                                    </td>
// 		                                    <td className="td-number">
// 		                                        {element.quantity}
// 		                                        <div className="btn-group">
// 		                                            <button className="btn btn-round btn-info btn-xs" onClick={() => props.handleMinus(element)}> <i className="material-icons">remove</i> </button>
// 		                                            <button className="btn btn-round btn-info btn-xs" onClick={() => props.handlePlus(element)}> <i className="material-icons">add</i> </button>
// 		                                        </div>
// 		                                    </td>
// 		                                    <td className="td-number">
// 		                                        <small>&#36;</small>{element.product.price * element.quantity}
// 		                                    </td>
// 		                                    <td className="td-actions">
// 		                                        <button type="button" rel="tooltip" data-placement="left" title="Remove item" className="btn btn-simple" onClick={() => props.handleDelete(element)}>
// 		                                            <i className="material-icons">close</i>
// 		                                        </button>
// 		                                    </td>
// 		                                </tr>
//                                   ))}
// 		                                <tr>
// 		                                    <td colSpan="2">
// 		                                    </td>
// 		                                    <td className="td-total">
// 		                                       Total
// 		                                    </td>
// 		                                    <td className="td-price">
// 		                                        <small>$</small>{props.cart.map(el => el.product.price * el.quantity).reduce((a,b) => a + b, 0)}
// 		                                    </td>
// 		                                    <td colSpan="1" className="text-right"> 
// 												<Link to='/checkout'>
// 													<button type="button" className="btn btn-info btn-round">
// 														Complete Purchase <i className="material-icons">keyboard_arrow_right</i>
// 													</button>
// 												</Link>
// 											</td>

// 		                                </tr>
// 		                            </tbody>
// 		                        </table>
// 		                        </div>
//                             </div>
//             </div>
//           </div>
//         </div>
//       </div>
// 		</div>
//   </div>
//   )
// }

// const mapPropToCart = (state) => {
//   return {
// 	cart: state.cart,

//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
// 	handlDelete(index){
// 		//dispatch(deleteFromCart(index))
// 	},
// 	handlePlus(product){
// 		dispatch(addToCart(product))
// 	},
// 	handleMinus(product){
// 		dispatch(removeFromCart(product))
// 	},
// 	handleDelete(product){
// 		dispatch(deleteFromCart(product))
// 	}
//   }
// }

// export default connect(mapPropToCart, mapDispatch)(Cart)