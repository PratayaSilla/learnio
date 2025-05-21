import React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page">
    <div className="login-container">
        <div className="login-graphic">
          <div className="graphic-main"></div>
          <div className="graphic-accent"></div> 
        </div>
        <div className="login-content">
          <h1 className="login-title">WELCOME BACK TO <span className="text-accent">LEARNIO</span></h1>
          <p className="login-subtitle">Continue your journey among 10,000+ students</p>

          <form className="login-form" >
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
          placeholder="type your password"
        />
      </div>
      
      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" className="checkbox" />
          <span>Remember me</span>
        </label> 
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
      </div>
      
      <button type="submit" className="login-button" onClick={() => navigate('/dashboard')}> 
        LOG IN <span className="arrow">→</span>
      </button>
    </form>

          <p className="signup-redirect">
            New here? <p onClick={() => navigate('/signup')} className="signup-link" style={{cursor:'pointer'}}>Create account</p>
          </p>
        </div> 
      </div> 
    
    </div> 
  );
};

export default Login;  