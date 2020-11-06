import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
} from 'react-router-dom';
import Models from './models/Models';
// import Cart from './Cart';
import User from './User';
import Login from './Login';
import Header from './Header';
import Orders from './Orders';
import Footer from './Footer';
//import history  from './history'
import SingleModel from './models/SingleModel';
import Home from './Home';
import Cart from './Cart';
import CheckoutView from './CheckoutView'
import { fetchProducts } from '../store/redux/products';
//import sucpayment from './sucpayment'

class Routes extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <Router >
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/models" exact component={Models} />
            <Route path="/models/:id" exact component={SingleModel} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/login" exact component={Login} />
            <Route path="/checkout" exact component={CheckoutView} />
            
            {/* <Route path="/signup" exact component={Signup} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
