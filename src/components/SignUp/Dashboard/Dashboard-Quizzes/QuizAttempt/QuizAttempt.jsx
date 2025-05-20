import React, { useState } from 'react';
import './QuizAttempt.css';
import DashboardHome from '../../Dashboard-Home/Dashboard-Home';
import DashboardPage from '../../../../../Pages/Dashboard-Main/DashboardPage';

const questionsData = [
  {
    id: 1,
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "None of the above",
    ],
  },
  {
    id: 3,
    question: "Which symbol is used for comments in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
  },
];

const QuizAttempt = () => {
  const [answers, setAnswers] = useState({});
  const [reviewFlags, setReviewFlags] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const toggleReview = (questionId) => {
    setReviewFlags((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
    console.log("Marked for review:", reviewFlags);
    alert("Quiz submitted!");
    setIsSubmitted(true);
  };

  // After submission, redirect to DashboardHome
  if (isSubmitted) {
    return <DashboardPage />;
  }

  return (
    <div className="quiz-attempt-container">
      <div className="quiz-header-section">
        <h1 className="quiz-title">Quiz</h1>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="questions-wrapper">
        {questionsData.map((q) => (
          <div
            key={q.id}
            className={`question-card ${reviewFlags[q.id] ? 'marked-review' : ''}`}
          >
            <div className="question-header">
              <h3>{`Q${q.id}. ${q.question}`}</h3>
              <button
                className="review-btn"
                onClick={() => toggleReview(q.id)}
              >
                {reviewFlags[q.id] ? "Unmark Review" : "Mark for Review"}
              </button>
            </div>
            <div className="options-list">
              {q.options.map((option, index) => (
                <label key={index} className="option">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleOptionSelect(q.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizAttempt;
