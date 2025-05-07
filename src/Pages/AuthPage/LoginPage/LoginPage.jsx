import React from 'react';
import LoginForm from '../../../components/Auth/Login/Login';
import './LoginPage.css';

const LoginPage = () => {
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
          <LoginForm />
          <p className="signup-redirect">
            New here? <a href="/signup" className="signup-link">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;