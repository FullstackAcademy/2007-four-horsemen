import React, { useState } from 'react';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';

import Popup from 'reactjs-popup';
import Signup from './Signup';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    return await axios
      .post('/api/auth/login', { username, password })
      .then((res) => {
        refreshPage();
      })
      .catch((err) => {
        window.alert('Wrong username or password!!!!');

      });
  };
  function refreshPage() {
    window.location.reload(false);
    window.location.replace('/');
  }

  return (
    <>
    <main className='login-container'>
    <div className='login-container'>
      <h1 className='login-title'>Login</h1>
      <div >
      <form className='login-form-div' onSubmit={onLoginSubmit}>
        <label className='login-username'>
          Username
          <input className='login-input' onChange={({ target: { value } }) => setUsername(value)} />
        </label>
        <label className='login-password'>
          Password
          <input className='login-input'
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
          />
        </label>
        <div className='login-bttn-div'>
        <button className='login-bttn'>Login</button>
        </div>
      </form>
      </div>
      {/* <NavLink to = "/signup">
        <button>Sign Up</button>
      </NavLink> */}

      <Popup trigger={<button className='login-bttn'> signup</button>} position="right center" modal>
        <Signup />

      </Popup>
      </div>
      </main>
    </>
  );
};

export default Login;
