import React from 'react';
import './ChapterVideo.css';
import { useNavigate } from 'react-router-dom';

const ChapterVideo = () => {
    const handleDeadClick = () => {
  alert("Sorry, This feature hasn't been updated yet!");
};
  const navigate = useNavigate();
  const videoData = {
    id: "abc123",
    title: "REACT HOOKS DEEP DIVE",
    date: "2023-11-15",
    description: "In this video, we'll explore advanced React Hooks patterns and optimization techniques to supercharge your components.",
    youtubeId: "dQw4w9WgXcQ"
  };

  return (
    <div className="chapter-video">
      <header className="video-header">
        <h1>YOUR <span className="text-accent">LEARNING STATION</span></h1>
        <div className="header-actions">
          <button className="new-note-btn" onClick={() => navigate('/dashboard?tab=notes')}>
            + SAVE NOTE
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search videos..." />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </header>

      <div className="video-container">
        <div className="video-section">
          <h2 className="video-title">{videoData.title}</h2>
          <div className="video-meta">
            <span className="video-date">Uploaded: {videoData.date}</span>
          </div>
          
          <div className="video-player">
            <iframe 
              width="100%" 
              height="500" 
              src={`https://www.youtube.com/embed/${videoData.youtubeId}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="video-description">
            <h3>ABOUT THIS CHAPTER</h3>
            <p>{videoData.description}</p>
          </div>
          
          <div className="video-actions">
            <button className="edit-btn" onClick={handleDeadClick}>BOOKMARK</button>
            <button className="review-btn" onClick={() => navigate('/dashboard?tab=quizzes')}>TAKE QUIZ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterVideo;