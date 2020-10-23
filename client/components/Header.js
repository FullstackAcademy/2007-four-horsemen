import React from 'react';
import { Connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
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
  );
};

export default connect()(Header);
