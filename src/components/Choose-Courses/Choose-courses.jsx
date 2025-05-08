import React from 'react';
import './Choose-courses.css';

const ChooseCourses = () => {
  const courses = [
    {
      id: 1,
      title: "COMPUTER SCIENCE",
      description: "Master algorithms, data structures, and system design",
      accentColor: "#B782FC"
    },
    {
      id: 2,
      title: "MEDICAL PREP",
      description: "Ace your MCAT with curated video resources",
      accentColor: "#06D6A0"
    },
    {
      id: 3,
      title: "ENGINEERING",
      description: "From thermodynamics to circuit design",
      accentColor: "#FFD166"
    },
    {
      id: 4,
      title: "BUSINESS",
      description: "Finance, marketing, and entrepreneurship",
      accentColor: "#EF476F"
    }
  ];

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1 className="courses-title">CHOOSE YOUR <span className="courses-title-accent">BATTLEGROUND</span></h1>
        <p className="courses-subtitle">10,000+ students are already crushing their exams</p>
      </div>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div 
            key={course.id}
            className="course-card"
            style={{ "--accent-color": course.accentColor }}
          >
            <h3 className="course-card-title">{course.title}</h3>
            <p className="course-card-desc">{course.description}</p>
            <button className="course-card-button">
              SELECT PATH <span className="button-arrow">→</span>
            </button>
            <div className="course-card-accent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCourses;