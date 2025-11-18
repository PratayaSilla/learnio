import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mentors.css';

const Mentors = () => {
  const navigate = useNavigate();
  
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      expertise: "Computer Science Professor",
      bio: "10+ years teaching at Stanford. Specializes in algorithms and AI.",
      image: "./Mentor.jpg",
      color: "#FF6B6B"
    },
    {
      name: "Mark Williams",
      expertise: "Medical Education Specialist",
      bio: "Former NEET examiner with 15 years of medical teaching experience.",
      image: "./Mentor.jpg",
      color: "#4ECDC4"
    },
    {
      name: "Priya Patel",
      expertise: "Engineering Consultant",
      bio: "MIT graduate with expertise in thermodynamics and mechanical systems.",
      image: "./Mentor.jpg",
      color: "#FFD166"
    },
    {
      name: "James Rodriguez",
      expertise: "Business Strategist",
      bio: "Helped launch 50+ startups with proven marketing frameworks.",
      image: "./Mentor.jpg",
      color: "#A5DD9B"
    },
    {
      name: "Dr. Naomi Kim",
      expertise: "Data Science Lead",
      bio: "Built machine learning systems for Fortune 500 companies.",
      image: "./Mentor.jpg",
      color: "#7E6BFF"
    },
    {
      name: "Elena Petrov",
      expertise: "UX Design Director",
      bio: "Created award-winning interfaces for top tech companies.",
      image: "./Mentor.jpg",
      color: "#FF9FF3"
    }
  ];

  return (
    <div className="mentors-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      
      <div className="mentors-header">
        <h1>MEET YOUR LEARNIO MENTORS</h1>
        <p>Learn from industry experts who've been where you want to go</p>
      </div>
      
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <div 
            key={index} 
            className="mentor-card"
            style={{ '--accent-color': mentor.color }}
          >
            <div className="mentor-image-container">
              <div className="mentor-image-frame"></div>
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="mentor-image"
              />
            </div>
            <div className="mentor-badge">
              <span>{mentor.expertise}</span>
            </div>
            <div className="mentor-content">
              <h3>{mentor.name}</h3>
              <p>{mentor.bio}</p>
              <button className="mentor-button">
                View Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;