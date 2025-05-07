import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="neo-about">
      <div className="neo-about-container">
        {/* Section Header */}
        <div className="neo-about-header">
          <h2 className="neo-about-title">SMARTER THAN RAW YOUTUBE</h2>
          <h1 className="neo-about-headline">WE SUPERCHARGE<br/>YOUR LEARNING</h1>
          <div className="neo-about-divider"></div>
        </div>

        {/* Features Grid */}
        <div className="neo-about-features">
          {/* Feature 1 */}
          <div className="neo-feature-card">
            <div className="neo-feature-number">01</div>
            <h3 className="neo-feature-title">Handpicked Videos</h3>
            <p className="neo-feature-desc">
              Our AI + human experts analyze thousands of videos to surface only the most effective explanations for your exact topic and learning style.
            </p>
            <div className="neo-feature-underline" style={{ backgroundColor: '#B782FC' }}></div>
          </div>

          {/* Feature 2 */}
          <div className="neo-feature-card">
            <div className="neo-feature-number">02</div>
            <h3 className="neo-feature-title">Smart Notes</h3>
            <p className="neo-feature-desc">
              Automatically generated timestamped notes that highlight key concepts. Edit, expand, and connect ideas across videos.
            </p>
            <div className="neo-feature-underline" style={{ backgroundColor: '#FFD166' }}></div>
          </div>

          {/* Feature 3 */}
          <div className="neo-feature-card">
            <div className="neo-feature-number">03</div>
            <h3 className="neo-feature-title">Targeted Quizzes</h3>
            <p className="neo-feature-desc">
              Custom quizzes generated from video content to reinforce understanding. Get immediate feedback on weak areas.
            </p>
            <div className="neo-feature-underline" style={{ backgroundColor: '#06D6A0' }}></div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="neo-comparison">
          <h2 className="neo-comparison-title">LEARNIO VS RAW YOUTUBE</h2>
          <div className="neo-comparison-grid">
            <div className="neo-comparison-header">
              <div className="neo-comparison-empty"></div>
              <div className="neo-comparison-option">Learnio</div>
              <div className="neo-comparison-option">YouTube</div>
            </div>
            
            <div className="neo-comparison-row">
              <div className="neo-comparison-feature">Curated Content</div>
              <div className="neo-comparison-value">✅ Expert-verified</div>
              <div className="neo-comparison-value">❌ Algorithm-driven</div>
            </div>
            
            <div className="neo-comparison-row">
              <div className="neo-comparison-feature">Learning Tools</div>
              <div className="neo-comparison-value">📝 Notes + Quizzes</div>
              <div className="neo-comparison-value">❌ None</div>
            </div>
            
            <div className="neo-comparison-row">
              <div className="neo-comparison-feature">Progress Tracking</div>
              <div className="neo-comparison-value">📊 Detailed analytics</div>
              <div className="neo-comparison-value">⏱️ Only watch time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;