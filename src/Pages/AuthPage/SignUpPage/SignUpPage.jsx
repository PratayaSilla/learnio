import React from 'react';
import SignUp from '../../../components/Auth/SignUp/SignUp';
import './SignUpPage.css';

const SignUpPage = () => {
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
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;