import React from 'react';
import './Dashboard-Home.css';
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
      const handleDeadClick = () => {
  alert("Sorry, This feature hasn't been updated yet!");
};
  const navigate = useNavigate(); 
  const progressItems = [
    { course: 'Computer Science', progress: 65, color: '#B782FC' },
    { course: 'Mathematics', progress: 40, color: '#FFD166' },
    { course: 'Physics', progress: 82, color: '#06D6A0' }
  ];

  const upcomingQuizzes = [
    { name: 'Data Structures', date: '2023-11-15' },
    { name: 'Calculus II', date: '2023-11-18' }
  ];

  return (
    <div className="dashboard-home">
      <section className="welcome-banner">
        <h1>YOUR LEARNING <span className="text-accent">DASHBOARD</span></h1>
        <p>Track your progress and dominate your courses</p>
      </section>
      <section className="progress-section">
        <h2 className="section-title">COURSE PROGRESS</h2>
        <div className="progress-cards">
          {progressItems.map((item, index) => (
            <div key={index} className="progress-card" style={{ '--accent-color': item.color }}>
              <h3>{item.course}</h3>
              <div className="home-progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${item.progress}%`,
                    backgroundColor: item.color
                  }}
                ></div>
              </div>
              <span className="progress-percent">{item.progress}%</span>
            </div>
          ))}
        </div>
      </section>
      <section className="quick-actions">
        <h2 className="section-title">QUICK ACTIONS</h2>
        <div className="action-buttons">
          <button className="action-btn continue-btn" onClick={() => navigate('?tab=chapters')}>
            CONTINUE LEARNING <span>→</span>
          </button>
          <button className="action-btn quiz-btn" onClick={() => navigate('?tab=quizzes')}>
            PRACTICE QUIZ <span>↗</span>
          </button>
        </div>
      </section>
      <section className="quizzes-section">
        <h2 className="section-title">UPCOMING QUIZZES</h2>
        <div className="quiz-cards">
          {upcomingQuizzes.map((quiz, index) => (
            <div key={index} className="quiz-card">
              <h3>{quiz.name}</h3>
              <p>Due: {quiz.date}</p>
              <button className="study-btn" onClick={handleDeadClick}>STUDY NOW</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;