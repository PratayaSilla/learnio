const prisma = require('../config/database');

const getAllNotes = async (req, res) => {
  try {
    const notes = await prisma.note.findMany({
      where: { userId: req.user.id },
      orderBy: { updatedAt: 'desc' }
    });

    const groupedNotes = notes.reduce((acc, note) => {
      const category = note.category || 'General';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(note);
      return acc;
    }, {});

    res.json({
      message: 'Notes retrieved successfully',
      notes,
      groupedNotes
    });
  } catch (error) {
    console.error('Get all notes error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await prisma.note.findFirst({
      where: {
        id,
        userId: req.user.id
      }
    });

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({
      message: 'Note retrieved successfully',
      note
    });
  } catch (error) {
    console.error('Get note by ID error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const note = await prisma.note.create({
      data: {
        title,
        content,
        category: category || 'General',
        userId: req.user.id
      }
    });

    res.status(201).json({
      message: 'Note created successfully',
      note
    });
  } catch (error) {
    console.error('Create note error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category } = req.body;

    const existingNote = await prisma.note.findFirst({
      where: {
        id,
        userId: req.user.id
      }
    });

    if (!existingNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const note = await prisma.note.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(category && { category })
      }
    });

    res.json({
      message: 'Note updated successfully',
      note
    });
  } catch (error) {
    console.error('Update note error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const existingNote = await prisma.note.findFirst({
      where: {
        id,
        userId: req.user.id
      }
    });

    if (!existingNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    await prisma.note.delete({
      where: { id }
    });

    res.json({
      message: 'Note deleted successfully'
    });
  } catch (error) {
    console.error('Delete note error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
