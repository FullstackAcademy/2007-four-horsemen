import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Orders from './Orders';
import Footer from './Footer';

import Home from './Home';

import User from './auth/User';
import Login from './auth/Login';
// import Signup from './auth/Signup';

import AllProducts from './products/AllProducts';
import SingleProduct from './products/SingleProduct';
import Cart from './Cart';
import CheckoutView from './CheckoutView';


import { fetchProducts } from '../store/redux/products';

import { setSingleUser } from '../store/redux/users';

const NoMatch = () => {
  return <h3>404 - Not found</h3>;
};



class Routes extends React.Component {
  componentDidMount() {
    this.props.getProducts();

    this.props.getUser();
  }

  render() {
    console.log(this.props)
    return (
      <Router >
        <div>
          <Header user={this.props.user} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/models" exact component={AllProducts} />
            <Route path="/models/:id" exact component={SingleProduct} />
            {/* <Route path="/cart" exact component={Cart} /> */}
            <Route path="/login" exact component={Login} />
            <Route path="/user" exact component={User} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/login" exact component={Login} />
            <Route path="/checkout" exact component={CheckoutView} />
            
            {/* <Route path="/signup" exact component={Signup} /> */}

            <NoMatch />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ products, user }) => {
  return { products, user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    getUser: () => dispatch(setSingleUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
