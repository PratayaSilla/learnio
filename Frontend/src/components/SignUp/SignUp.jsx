import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const fieldName = e.target.id === 'confirm-password' ? 'confirmPassword' : e.target.id;
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      navigate('/choosecourses');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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
          <form className="signup-form" onSubmit={handleSubmit}> 
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="name" className="form-label">NAME</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">EMAIL</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">PASSWORD</label>
              <input 
                type="password" 
                id="password" 
                className="form-input" 
                placeholder="type password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div> 
            
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">CONFIRM PASSWORD</label>
              <input 
                type="password" 
                id="confirm-password" 
                className="form-input" 
                placeholder="re-type password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
            
            <button 
              type="submit" 
              className="signup-button"
              disabled={loading}
            > 
              {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'} <span className="arrow">→</span>
            </button>
            
            <p className="login-redirect">
              Already have an account? <span onClick={() => navigate('/login')} className="login-link" style={{cursor: 'pointer'}}>Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div> 
  );
};

export default SignUp;