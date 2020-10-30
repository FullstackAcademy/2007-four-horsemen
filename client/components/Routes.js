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
import Footer from './Footer';
import SingleModel from './models/SingleModel';
import Home from './Home';
import { fetchProducts } from '../store/redux/products';
import { setSingleUser } from "../store/redux/users"

class Routes extends React.Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getUser();
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div>
          <Header user={this.props.user}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/models" exact component={Models} />
            <Route path="/models/:id" exact component={SingleModel} />
            {/* <Route path="/cart" exact component={Cart} /> */}
            <Route path="/login" exact component={Login} />
            <Route path="/user" exact component={User} />
            {/*<Route path="/checkout" exact component={Checkout} /> */}
            {/* <Route path="/signup" exact component={Signup} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ products,user }) => {
  return { products, user};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    getUser: () => dispatch(setSingleUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
