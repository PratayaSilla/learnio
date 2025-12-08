const express = require('express');
const cors = require('cors');
const prisma = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/notesRoutes');

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.get('/db-status', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'connected', database: 'NeonDB PostgreSQL' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ status: 'disconnected', error: error.message });
  }
});

app.use('/auth', authRoutes);
app.use('/notes', notesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
