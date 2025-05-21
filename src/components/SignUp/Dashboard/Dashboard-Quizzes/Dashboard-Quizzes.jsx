import React from 'react';
import './Dashboard-Quizzes.css';
import { useNavigate } from "react-router-dom";

const DashboardQuizzes = () => {

  const handleDeadClick = () => {
  alert("Sorry, This feature hasn't been updated yet!");
};

    const navigate = useNavigate(); 
  const quizzes = [
    {
      id: 1,
      title: "Biology Fundamentals",
      progress: 65,
      questions: 20,
      dueDate: "Dec 15, 2023",
      accentColor: "#B782FC",
      category: "Science"
    },
    {
      id: 2,
      title: "Organic Chemistry",
      progress: 30,
      questions: 15,
      dueDate: "Dec 20, 2023",
      accentColor: "#FFD166",
      category: "Chemistry"
    },
    {
      id: 3,
      title: "Thermodynamics",
      progress: 0,
      questions: 25,
      dueDate: "Jan 5, 2024",
      accentColor: "#06D6A0",
      category: "Physics"
    },
    {
      id: 4,
      title: "Calculus Basics",
      progress: 45,
      questions: 18,
      dueDate: "Dec 18, 2023",
      accentColor: "#EF476F",
      category: "Mathematics"
    }
  ];



  return (
    <div className="dashboard-quizzes">
      <div className="dashboard-header">
        <h1 className="dashboard-title">My Quizzes</h1>
        <div className="dashboard-controls">
          <button className="filter-button" onClick={handleDeadClick}>Filter</button>
          <button className="sort-button" onClick={handleDeadClick}>Sort</button>
        </div>
      </div>
      
      <div className="quiz-grid">
        {quizzes.map((quiz) => (
          <div 
            key={quiz.id}
            className="quiz-card"
            style={{ "--accent-color": quiz.accentColor }}
            onClick={()=>navigate('/attemptquiz')}
          >
            <div className="quiz-badge">{quiz.category}</div>
            <div className="quiz-header">
              <h3>{quiz.title}</h3>
              <span className="quiz-status">
                {quiz.progress > 0 ? `${quiz.progress}% Done` : 'New'}
              </span>
            </div>
            
            <div className="quiz-progress">
              <div 
                className="progress-bar"
                style={{ width: `${quiz.progress}%` }}
              ></div>
            </div>
            
            <div className="quiz-meta">
              <span><i className="icon-questions"></i> {quiz.questions} Qs</span>
              <span><i className="icon-calendar"></i> Due {quiz.dueDate}</span>
            </div>
            
            <button 
              className="quiz-action-button"
              onClick={()=>navigate('/attemptquiz')}
            >
              {quiz.progress > 0 ? 'Continue' : 'Start Now'}
              <span className="action-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardQuizzes;