import React from "react";
import { NavLink } from 'react-router-dom';
import "./Dashboard-Sidebar.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect,useState } from "react";

const DashboardSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState(null);
useEffect(() => {
    const params = new URLSearchParams(location.search);
    setTab(params.get('tab'));
    console.log(params.get('tab'))
  }, [location]);
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          WELCOME TO YOUR <span className="text-accent">DASHBOARD</span>
        </h2>
        <div className="user-profile">
          <div className="user-avatar"></div>
          <span className="username">User Profile</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="?tab=home"
              end
              className={`nav-link ${tab==="home" ? "side-active" : ""}`}
              
            >
              DASHBOARD HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=chapters"
              className={`nav-link ${tab==="chapters" ? "side-active" : ""}`}
              
            >
              CHAPTERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=notes"
              className={`nav-link ${tab==="notes" ? "side-active" : ""}`}
              
            >
              NOTES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=quizzes"
              className={`nav-link ${tab==="quizzes" ? "side-active" : ""}`}

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
    </aside>
  );
};

export default DashboardSidebar;
