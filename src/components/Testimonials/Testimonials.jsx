import React from 'react';
import { useNavigate } from 'react-router-dom';
import './testimonials.css';

const Testimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      quote: "Learnio cut my study time in HALF. The curated videos are so precise I don't waste time on irrelevant content anymore.",
      author: "Aisha K.",
      role: "Med Student, 3rd Year",
      rating: "★★★★★",
      accent: "#B782FC"
    },
    {
      id: 2,
      quote: "The auto-generated quizzes after videos helped me retain 3x more than just watching YouTube. Scored 92% on my finals!",
      author: "Marcus T.",
      role: "Engineering Student",
      rating: "★★★★★",
      accent: "#FFD166"
    },
    {
      id: 3,
      quote: "Finally a service that filters the garbage on YouTube. My grades went from B's to A's in one semester.",
      author: "Sophie L.",
      role: "High School Senior",
      rating: "★★★★☆",
      accent: "#06D6A0"
    }
  ];

  return (
    <div className="neo-testimonials">
      <div className="neo-testimonials-container">
        <div className="neo-testimonials-header">
          <h2 className="neo-testimonials-subtitle">REAL STUDENTS, REAL RESULTS</h2>
          <h1 className="neo-testimonials-title">THE <span>LEARNIO</span><br/>DIFFERENCE</h1>
          <div className="neo-testimonials-divider"></div>
        </div>

        <div className="neo-testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="neo-testimonial-card"
              style={{ "--accent-color": testimonial.accent }}
            >
              <div className="neo-testimonial-rating">{testimonial.rating}</div>
              <blockquote className="neo-testimonial-quote">"{testimonial.quote}"</blockquote>
              <div className="neo-testimonial-author">
                <span className="neo-testimonial-name">{testimonial.author}</span>
                <span className="neo-testimonial-role">{testimonial.role}</span>
              </div>
              <div className="neo-testimonial-accent"></div>
            </div>
          ))}
        </div>

        <div className="neo-testimonials-cta">
          <h3>READY TO TRANSFORM YOUR LEARNING?</h3>
          <button className="neo-cta-button" onClick={() => navigate('/signup')}>
            JOIN 10,000+ STUDENTS NOW <span className="neo-cta-arrow">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
