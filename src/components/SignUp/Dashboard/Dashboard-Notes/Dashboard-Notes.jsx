import React from 'react';
import './Dashboard-Notes.css';

const DashboardNotes = () => {
  const noteCategories = [
    {
      id: 1,
      title: "REACT MASTERY",
      notes: [
        { id: 1, title: "Hooks Optimization", date: "2023-11-10", excerpt: "useMemo vs useCallback use cases..." },
        { id: 2, title: "Context Patterns", date: "2023-11-05", excerpt: "Best practices for scalable context..." }
      ]
    },
    {
      id: 2,
      title: "NODE.JS ESSENTIALS",
      notes: [
        { id: 3, title: "Middleware Architecture", date: "2023-10-28", excerpt: "Building modular middleware stacks..." },
        { id: 4, title: "Error Handling", date: "2023-10-22", excerpt: "Centralized error handling patterns..." }
      ]
    }
  ];

  return (
    <div className="dashboard-notes">
      <header className="notes-header">
        <h1>YOUR <span className="text-accent">KNOWLEDGE VAULT</span></h1>
        <div className="header-actions">
          <button className="new-note-btn">
            + NEW NOTE
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search notes..." />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </header>

      <div className="notes-container">
        {noteCategories.map((category) => (
          <div key={category.id} className="category-section">
            <h2 className="category-title">{category.title}</h2>
            <div className="notes-grid">
              {category.notes.map((note) => (
                <div key={note.id} className="note-card">
                  <div className="note-header">
                    <h3>{note.title}</h3>
                    <span className="note-date">{note.date}</span>
                  </div>
                  <p className="note-excerpt">{note.excerpt}</p>
                  <div className="note-actions">
                    <button className="edit-btn">EDIT</button>
                    <button className="review-btn">REVIEW</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardNotes;