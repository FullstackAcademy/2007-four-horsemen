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

function Home() {
  return (
    <div>
      <h3>here is homepage</h3>
    </div>
  );
}

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route path="/models" exact component={Models} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}
