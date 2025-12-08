import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./Dashboard-Sidebar.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from '../../../../context/AuthContext';

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [tab, setTab] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setTab(params.get('tab'));
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          WELCOME TO YOUR <span className="text-accent">DASHBOARD</span>
        </h2>
        <div className="user-profile">
          <div className="user-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <span className="username">{user?.name || 'User'}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="?tab=home"
              end
              className={`nav-link ${tab === "home" ? "side-active" : ""}`}
            >
              DASHBOARD HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=chapters"
              className={`nav-link ${tab === "chapters" ? "side-active" : ""}`}
            >
              CHAPTERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=notes"
              className={`nav-link ${tab === "notes" ? "side-active" : ""}`}
            >
              NOTES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=quizzes"
              className={`nav-link ${tab === "quizzes" ? "side-active" : ""}`}
            >
              QUIZZES
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="recent-activity">
        <h3 className="activity-title">RECENT ACTIVITY</h3>
        <ul>
          <li className="activity-item">Completed Chapter 3</li>
          <li className="activity-item">Scored 92% on React Quiz</li>
          <li className="activity-item">Added 5 new notes</li>
        </ul>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        LOGOUT →
      </button>
    </aside>
  );
};

export default DashboardSidebar;
