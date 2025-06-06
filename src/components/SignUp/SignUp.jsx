import React from 'react';
import './SignUp.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
        const navigate = useNavigate(); 
  return (

    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-graphic">
          <div className="graphic-main"></div>
          <div className="graphic-accent"></div>
        </div>
        <div className="signup-content">
          <h1 className="signup-title">JOIN THE <span className="text-accent">LEARNIO</span> ARMY</h1>
          <p className="signup-subtitle">10,000+ students already crushing their exams</p>
            <form className="signup-form" > 

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
            placeholder="type password"
          />
        </div> 
        
        <div className="form-group">
          <label htmlFor="confirm-password" className="form-label">CONFIRM PASSWORD</label>
          <input 
            type="password" 
            id="confirm-password" 
            className="form-input" 
            placeholder="re-type password"
          />
        </div>
        
        <button type="submit" className="signup-button" onClick={() => navigate('/choosecourses')}> 
          CREATE ACCOUNT <span className="arrow">→</span>
        </button>
        
        <p className="login-redirect">
          Already have an account? <p onClick={()=>navigate('/login')} className="login-link" style={{cursor : 'pointer'}}>Log in</p>
        </p>
  
            </form>
        </div>
      </div>
    </div> 
    
    
  );
};

export default SignUp;