

import React from 'react';
import '../Styles/login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Log in to your account</h2>
      <p className="login-subtitle">Welcome back! Sign in to your account</p>
      {/* <div className="login-social-buttons">
        <button className="login-google-button">
          <FontAwesomeIcon icon={FaFacebook} style={{color:'black'}}/>
        </button>
        <button className="login-facebook-button">
          <img src="facebook-icon.png" alt="Facebook" className="social-icon" />
          Facebook
        </button>
      </div>
      <div className="login-divider">or</div> */}
      <form className="login-form">
        <input
          type="text"
          placeholder="Email or Username"
          className="login-input"
          style={{width:'100%'}}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" /> Remember
          </label>
          <a href="/" className="forgot-password">Forgotten password?</a>
        </div>
        <button type="submit" className="login-submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
