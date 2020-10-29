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
// import Cart from './Cart2';
import User from './User'
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import SingleModel from './models/SingleModel';
import Checkout from './Checkout';
import Home from './Home';
import { fetchProducts } from '../store/redux/products';

const cart = ['models','models2']
const Cart = (props) => {
  return (
    <div>
      {props}
    </div>
  );
};
class Routes extends React.Component {
  componentDidMount(){
    this.props.getProducts()
  }
  render() {

    return (
      <Router>
        <div>
          <Header />
              <Route path="/" exact component={Home} />
              <Route path="/models" exact component={Models} />
              <Route path="/models/:id" exact component={SingleModel} />
              <Route path="/cart" exact component={Cart(cart)} />
              <Route path="/user" exact component={User} />
              <Route path="/login" exact component={Login} />
              {/*<Route path="/checkout" exact component={Checkout} /> */}
              {/* <Route path="/signup" exact component={Signup} /> */}
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
