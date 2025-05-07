import React from 'react';
import { Link } from 'react-router-dom'; // Changed from <a href="#">
import './footer.css';

const Footer = () => {
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
            <Link to="/" className="neo-footer-link">Home</Link>
            <Link to="/features" className="neo-footer-link">Features</Link>
            <Link to="/pricing" className="neo-footer-link">Pricing</Link>
            <Link to="/testimonials" className="neo-footer-link">Testimonials</Link>
          </div>

          <div className="neo-footer-col">
            <h3 className="neo-footer-heading">LEGAL</h3>
            <Link to="/terms" className="neo-footer-link">Terms</Link>
            <Link to="/privacy" className="neo-footer-link">Privacy</Link>
            <Link to="/cookies" className="neo-footer-link">Cookies</Link>
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