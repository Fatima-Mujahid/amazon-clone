import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form onSubmit>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange />

          <button className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use &amp;
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
