import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript and modern frameworks in this comprehensive course.",
      category: "COMPUTER SCIENCE",
      color: "#FF6B6B"
    },
    {
      title: "Data Science Fundamentals",
      description: "Learn Python, Pandas, NumPy and basic machine learning concepts.",
      category: "COMPUTER SCIENCE",
      color: "#4ECDC4"
    },
    {
      title: "UX/UI Design Principles",
      description: "Understand user experience and interface design with hands-on projects.",
      category: "DESIGN",
      color: "#FFD166"
    },
    {
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter.",
      category: "ENGINEERING",
      color: "#A5DD9B"
    },
    {
      title: "Cybersecurity Essentials",
      description: "Learn how to protect systems and networks from digital attacks.",
      category: "COMPUTER SCIENCE",
      color: "#7E6BFF"
    },
    {
      title: "Digital Marketing Strategy",
      description: "Master SEO, social media marketing, and content creation.",
      category: "BUSINESS",
      color: "#FF9FF3"
    }
  ];

  return (
    <div className="battleground-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      
      <div className="battleground-header">
        <h1>Courses you can excel on <span style={{color:"#B782FC"}}>Learnio</span></h1>
        <p>We will also be expanding to other courses as well</p>
      </div>
      
      <div className="battleground-grid">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="battleground-card"
            style={{ borderColor: course.color }}
          >
            <div className="battleground-category" style={{ color: course.color }}>
              {course.category}
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* <button 
              className="battleground-button"
              style={{ color: course.color }}
            >
              SELECT PATH →
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;