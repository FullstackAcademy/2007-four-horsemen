import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
} from 'react-router-dom';
import AllProducts from './products/AllProducts';
import User from './User';
import Login from './Login';
import Header from './Header';
import Orders from './Orders';
import Footer from './Footer';
import SingleProduct from './products/SingleProduct';
import Home from './Home';
import Cart from './Cart';
import CheckoutView from './CheckoutView'
import { fetchProducts } from '../store/redux/products';
import { setSingleUser } from '../store/redux/users';

class Routes extends React.Component {
  componentDidMount() {
    this.props.getProducts();

    this.props.getUser();
  }

  render() {
    return (
      <Router>
        <div>
          <Header user={this.props.user} />
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
