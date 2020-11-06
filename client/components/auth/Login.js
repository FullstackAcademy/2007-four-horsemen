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

    await axios
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
      <h1>Login</h1>
      <form onSubmit={onLoginSubmit}>
        <label>
          Username
          <input onChange={({ target: { value } }) => setUsername(value)} />
        </label>
        <label>
          Password
          <input
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
          />
        </label>
        <button>Login</button>
      </form>
      {/* <NavLink to = "/signup">
        <button>Sign Up</button>
      </NavLink> */}

      <Popup trigger={<button> signup</button>} position="right center" modal>
        <Signup />
      </Popup>
    </>
  );
};

export default Login;
