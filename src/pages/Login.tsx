import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.scss';

const Login: React.FC = () => (
  <main className="form-signin">
    {/* <form> */}
    <span className="mb-3 cowculator-login__logo" />
    <h1 className="mb-3">Login</h1>

    <div className="mb-3 form-floating">
      <input
        type="email"
        className="form-control input-group-text cowculator-login__input-boxes"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput" className="cowculator-login__input-labels">
        Email
      </label>
    </div>
    <div className="mb-5 form-floating">
      <input
        type="password"
        className="form-control input-group-text cowculator-login__input-boxes"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword" className="cowculator-login__input-labels">
        Password
      </label>
    </div>
    <Link to="/dashboard">
      <button className="mt-5 w-100 btn btn-lg btn-primary cowculator-login__cta-btn" type="button">
        Log In
      </button>
    </Link>
    <p className="mt-2 mb-3">Forgot your password?</p>
    {/* </form> */}
  </main>
);

export default Login;
