import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">EMAIL</label>
        <input 
          type="email" 
          id="email" 
          className="form-input" 
          placeholder="your@email.com"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password" className="form-label">PASSWORD</label>
        <input 
          type="password" 
          id="password" 
          className="form-input" 
          placeholder="••••••••"
        />
      </div>
      
      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" className="checkbox" />
          <span>Remember me</span>
        </label>
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
      </div>
      
      <button type="submit" className="login-button">
        LOG IN <span className="arrow">→</span>
      </button>
    </form>
  );
};

export default Login;