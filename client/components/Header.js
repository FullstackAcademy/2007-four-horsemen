import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../store/redux'

const Header = () => {
  return (
    <nav>
      <ul className="home-models">
        <li className="logo">
          <NavLink to="/">
            <img className="lo" src="lambo-logo.png" alt='lamborghini logo'></img>
          </NavLink>
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
        <li className="nav-login">
          <button className="login-button" type="submit">
            <NavLink to="/user">
              <i className="fas fa-user"></i>
            </NavLink>
          </button>
        </li>
        <li className="nav-cart">
          <button className="cart-button" type="submit" >
         
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
            {/* {(props.addedProducts.length && props.addedProducts.reduce((a, b) => {
                if(typeof b === 'object'){
                  return a + b.quantity
                }
                return a + b}, 0)
              )} */}
            
          </button>
          {/* <span>{store.addedProducts.length}</span> */}
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
  );
};

// const mapState =state =>{
//   return {
//     addedProducts:state.addedProducts,
//   }
// }

export default connect()(Header);
