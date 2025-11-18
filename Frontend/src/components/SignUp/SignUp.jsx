import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '' // Added name field as it's required by the backend
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id === 'confirm-password' ? 'confirmPassword' : e.target.id]: e.target.value
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
      const response = await fetch('https://learnio-ya0q.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.email.split('@')[0] // Using email prefix as name for now
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store the token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      // Navigate to choose courses page on success
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
                Already have an account? <p onClick={() => navigate('/login')} className="login-link" style={{cursor: 'pointer'}}>Log in</p>
              </p>
            </form>
        </div>
      </div>
    </div> 
    
    
    );
};

export default SignUp;