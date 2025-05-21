import React from 'react';
import { useNavigate } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate(); 
  return (
    <div className="neo-footer">
      <div className="neo-footer-container">

        <div className="neo-footer-grid">

          <div className="neo-footer-col">
            <h3 className="neo-footer-heading">LEARNIO</h3>
            <p className="neo-footer-text">
              The smartest way to study using YouTube. Curated videos, AI notes, and quizzes.
            </p>
            <div className="neo-footer-socials">
              <a href="#" className="neo-social-link">TW</a>
              <a href="#" className="neo-social-link">IG</a>
              <a href="#" className="neo-social-link">DC</a>
            </div>
          </div>

          <div className="neo-footer-col">
            <h3 className="neo-footer-heading">NAVIGATE</h3>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Home</a>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Features</a>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Pricing</a>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Testimonials</a>
          </div>

          <div className="neo-footer-col">
            <h3 className="neo-footer-heading" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>LEGAL</h3>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Terms</a>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Privacy</a>
            <a href='#' className="neo-footer-link" onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Cookies</a>
          </div>

          <div className="neo-footer-col">
            <h3 className="neo-footer-heading">CONTACT</h3>
            <a href="mailto:hello@learnio.com" className="neo-footer-link">hello@learnio.com</a>
            <a href="tel:+11234567890" className="neo-footer-link">+1 (123) 456-7890</a>
          </div>
        </div>

        <div className="neo-footer-copyright">
          <p>© 2023 LEARNIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;