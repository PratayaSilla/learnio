import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <form className="signup-form">
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
      
      <div className="form-group">
        <label htmlFor="confirm-password" className="form-label">CONFIRM PASSWORD</label>
        <input 
          type="password" 
          id="confirm-password" 
          className="form-input" 
          placeholder="••••••••"
        />
      </div>
      
      <button type="submit" className="signup-button">
        CREATE ACCOUNT <span className="arrow">→</span>
      </button>
      
      <p className="login-redirect">
        Already have an account? <a href="#" className="login-link">Log in</a>
      </p>
    </form>
  );
};

export default SignUp;