import React from 'react';
import { useNavigate } from 'react-router-dom';  // <-- ADD THIS IMPORT
import './communityjoin.css';

const CommunityJoin = () => {
  const navigate = useNavigate();  // <-- ADD THIS HOOK

  return (
    <div className="neo-community">
      <div className="neo-community-container">
        <div className="neo-community-content">
          <h2>
            <span className="neo-community-headline">JOIN OUR</span>
            <span className="neo-community-accent">DISCORD ARMY</span>
          </h2>
          <p className="neo-community-text">
            10,000+ students crushing exams together. Be next.
          </p>
          <button 
            className="neo-community-button"
            onClick={() => navigate('/signup')}  // <-- ADD THIS CLICK HANDLER
          >
            GET INVITE <span className="neo-button-arrow">↗</span>
          </button>
        </div>
        <div className="neo-community-graphic">
          <div className="neo-community-dots"></div>
        </div>
      </div>
    </div>
  );
};

export default CommunityJoin;