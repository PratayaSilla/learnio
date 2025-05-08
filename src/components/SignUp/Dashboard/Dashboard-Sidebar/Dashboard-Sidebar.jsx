import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard-Sidebar.css';

const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar">

      <div className="sidebar-header">
        <h2 className="sidebar-title">WELCOME TO YOUR <span className="text-accent">DASHBOARD</span></h2>
        <div className="user-profile">
          <div className="user-avatar"></div>
          <span className="username">Prataya</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink 
              to="/dashboard" 
              end
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              DASHBOARD HOME
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/chapters" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              CHAPTERS
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/notes" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              NOTES
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/quizzes" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              QUIZZES
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3 className="activity-title">RECENT ACTIVITY</h3>
        <ul>
          <li className="activity-item">Completed Chapter 3</li>
          <li className="activity-item">Scored 92% on React Quiz</li>
          <li className="activity-item">Added 5 new notes</li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;