import React from 'react';
import './Dashboard-Chapters.css';
import { useNavigate } from "react-router-dom";


const DashboardChapters = () => {
  const navigate = useNavigate(); 
  const courses = [
    {
      id: 1,
      title: "ADVANCED REACT CONCEPTS",
      progress: 68,
      chapters: [
        { id: 1, title: "React Hooks Deep Dive", completed: true },
        { id: 2, title: "Context API Patterns", completed: true },
        { id: 3, title: "Performance Optimization", completed: false },
        { id: 4, title: "Advanced State Management", completed: false }
      ]
    },
    {
      id: 2,
      title: "NODE.JS BACKEND DEVELOPMENT",
      progress: 35,
      chapters: [
        { id: 1, title: "Express Fundamentals", completed: true },
        { id: 2, title: "REST API Design", completed: false },
        { id: 3, title: "Authentication Strategies", completed: false }
      ]
    }
  ];

  return (
    <div className="dashboard-chapters">
      <header className="chapters-header">
        <h1>YOUR COURSE <span className="text-accent">CHAPTERS</span></h1>
        <p>Continue where you left off</p>
      </header>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <h2>{course.title}</h2>
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span>{course.progress}% COMPLETE</span>
              </div>
            </div>

            <ul className="chapter-list">
              {course.chapters.map((chapter) => (
                <li 
                  key={chapter.id} 
                  className={`chapter-item ${chapter.completed ? 'completed' : ''}`}
                >
                  <div className="chapter-status">
                    {chapter.completed ? '✓' : '→'}
                  </div>
                  <h3>{chapter.title}</h3>
                  <button className="action-btn" onClick={() => navigate('/chaptervideo')}>
                    {chapter.completed ? 'REVIEW' : 'START'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardChapters;