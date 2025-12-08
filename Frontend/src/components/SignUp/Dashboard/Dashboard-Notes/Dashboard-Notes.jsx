import React, { useState, useEffect } from 'react';
import './Dashboard-Notes.css';
import { notesAPI } from '../../../../services/api';

const DashboardNotes = () => {
  const [notes, setNotes] = useState([]);
  const [groupedNotes, setGroupedNotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  });
  const [saving, setSaving] = useState(false);

  // Fetch notes on mount
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await notesAPI.getAll();
      setNotes(data.notes);
      setGroupedNotes(data.groupedNotes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter notes by search term
  const filteredGroupedNotes = Object.entries(groupedNotes).reduce((acc, [category, categoryNotes]) => {
    const filtered = categoryNotes.filter(note => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  // Open modal for new note
  const handleNewNote = () => {
    setEditingNote(null);
    setFormData({ title: '', content: '', category: '' });
    setShowModal(true);
  };

  // Open modal for editing
  const handleEdit = (note) => {
    setEditingNote(note);
    setFormData({
      title: note.title,
      content: note.content,
      category: note.category
    });
    setShowModal(true);
  };

  // Save note (create or update)
  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingNote) {
        await notesAPI.update(editingNote.id, formData);
      } else {
        await notesAPI.create(formData);
      }
      setShowModal(false);
      fetchNotes();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete note
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }
    try {
      await notesAPI.delete(id);
      fetchNotes();
    } catch (err) {
      setError(err.message);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="dashboard-notes">
        <div className="loading-state">Loading your notes...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-notes">
      <header className="notes-header">
        <h1>YOUR <span className="text-accent">KNOWLEDGE VAULT</span></h1>
        <div className="header-actions">
          <button className="new-note-btn" onClick={handleNewNote}>
            + NEW NOTE
          </button>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search notes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="notes-container">
        {Object.keys(filteredGroupedNotes).length === 0 ? (
          <div className="empty-state">
            <h2>No notes yet!</h2>
            <p>Click "NEW NOTE" to create your first note.</p>
          </div>
        ) : (
          Object.entries(filteredGroupedNotes).map(([category, categoryNotes]) => (
            <div key={category} className="category-section">
              <h2 className="category-title">{category.toUpperCase()}</h2>
              <div className="notes-grid">
                {categoryNotes.map((note) => (
                  <div key={note.id} className="note-card">
                    <div className="note-header">
                      <h3>{note.title}</h3>
                      <span className="note-date">{formatDate(note.updatedAt)}</span>
                    </div>
                    <p className="note-excerpt">
                      {note.content.length > 100 
                        ? note.content.substring(0, 100) + '...' 
                        : note.content}
                    </p>
                    <div className="note-actions">
                      <button className="edit-btn" onClick={() => handleEdit(note)}>
                        EDIT
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(note.id)}>
                        DELETE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Note Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">
              {editingNote ? 'EDIT NOTE' : 'CREATE NEW NOTE'}
            </h2>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Note title..."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">CATEGORY</label>
                <input
                  type="text"
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., React, Node.js, General"
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">CONTENT</label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your note here..."
                  rows={6}
                  required
                />
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="cancel-btn" 
                  onClick={() => setShowModal(false)}
                >
                  CANCEL
                </button>
                <button 
                  type="submit" 
                  className="save-btn"
                  disabled={saving}
                >
                  {saving ? 'SAVING...' : 'SAVE NOTE'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardNotes;