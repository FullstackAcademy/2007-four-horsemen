import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import productsReducer from '../store/redux/products';

const Header = () => {
  return (
    <nav>
      <ul className="home-models">
        <li className="logo">
          <NavLink to="/">Logo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/models">Models</NavLink>
        </li>
        <li className="nav-search">
          <button className="search-button" type="submit">
            <NavLink to="/search">
              <i className="fas fa-search"></i>
            </NavLink>
          </button>
        </li>
        <li className="nav-login">
          <button className="login-button" type="submit">
            <NavLink to="/login">
              <i className="fas fa-user"></i>
            </NavLink>
          </button>
        </li>
        <li className="nav-cart">
          <button className="cart-button" type="submit"  /*key={product.id} */>
          {/* {(props.cart.length && props.cart.reduce((a, b) => {
                if(typeof b === 'object'){
                  return a + b.quantity
                }
                return a + b}, 0)
              )} */}
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
          </button>
        </li>
        <li className="nav-logout">
          <button className="logout-button" type="submit">
            <NavLink to="/">
              <i className="fas fa-sign-out-alt"></i>
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>

    /*
     <nav>
      <div className="home-models">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/models">Models</NavLink>
      </div>
      <div className="login-cart">
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
    */
  );
};

export default connect()(Header);
