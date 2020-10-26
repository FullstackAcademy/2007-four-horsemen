import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
} from 'react-router-dom';
import Models from './Models';
import Cart from './Cart';
import Login from './Login';
import Header from './Header';
import Footer from './Footer'
import SingleModel from './SingleModel';
import Checkout from './Checkout';



class Routes extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route path="/models" exact component={Models} />
            <Route path="/models/:id" exact component={SingleModel}/>
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/checkout" exact component={Checkout} />
            {/* <Route path="/signup" exact component={Signup} /> */}
          </main>
        </div>
        <Footer/>

      </Router>
  
    );
  }
}


export default Routes;
