import React from 'react';
import './hero-section.css';

const Herosection = () => {
  return (
    <div className="neo-hero">
      <div className="neo-hero-content">
        <h1>
          <span className="neo-hero-title">CRUSH YOUR EXAMS</span>
          <span className="neo-hero-accent">WITH LEARNIO</span>
        </h1>
        
        <p className="neo-hero-subtitle">
          No fluff. Just <span className="neo-highlight">hard-hitting</span> education resources that work.
        </p>

        <div className="neo-hero-buttons">
          <button className="neo-btn neo-btn-primary">
            GET STARTED <span className="neo-arrow">→</span>
          </button>
          <button className="neo-btn neo-btn-secondary">
            WATCH DEMO <span className="neo-arrow">↗</span>
          </button>
        </div>

        <div className="neo-hero-stats">
          <div className="neo-stat">
            <span className="neo-stat-number">10K+</span>
            <span className="neo-stat-label">STUDENTS</span>
          </div>
          <div className="neo-stat">
            <span className="neo-stat-number">500+</span>
            <span className="neo-stat-label">VIDEOS</span>
          </div>
          <div className="neo-stat">
            <span className="neo-stat-number">98%</span>
            <span className="neo-stat-label">PASS RATE</span>
          </div>
        </div>
      </div>
      <div className="neo-hero-graphic">
        <div className="neo-graphic-main"></div>
        <div className="neo-graphic-accent"></div>
        <div className="neo-graphic-dots"></div>
      </div>
    </div>
  );
};

export default Herosection;