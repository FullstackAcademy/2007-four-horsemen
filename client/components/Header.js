import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Header = (props) => {
  const user = props.user;
  console.log(props)
  return (
    <nav>
      <ul className="home-models">
        <li className="logo">
          <NavLink to="/">
            <img
              className="lo"
              src="https://www.lamborghini.com/themes/custom/lambo_facelift_2019/images/logo.png"
              alt="lamborghini logo"
            ></img>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/models">Models</NavLink>
        </li>

        {user.length === 0 ? (
          <li className="nav-login">
            <button className="login-button" type="submit">
              <NavLink to="/login">
                <i className="fas fa-user fa-lg"></i>
              </NavLink>
            </button>
          </li>
        ) : (
          <li className="nav-login">
            <button className="login-button" type="submit">
              <NavLink to="/user">
                <i className="fas fa-user fa-lg"> Hello, {user.name}!</i>
              </NavLink>
            </button>
          </li>
        )}

        <li className="nav-cart">
          <button className="cart-button" type="submit">
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart fa-lg"></i>
            </NavLink>
          </button>
        </li>

        <li className="nav-logout">
          <button
            className="logout-button"
            type="submit"
            onClick={() => {
              window.location.reload(false);
              return axios.delete('/api/auth/logout');
            }}
          >
            <NavLink to="/">
              <i className="fas fa-sign-out-alt fa-lg"></i>
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default connect()(Header);
