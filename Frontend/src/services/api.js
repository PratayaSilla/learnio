const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const getToken = () => localStorage.getItem('token');
const setToken = (token) => localStorage.setItem('token', token);
const removeToken = () => localStorage.removeItem('token');

const fetchWithAuth = async (endpoint, options = {}) => {
  const token = getToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export const authAPI = {
  register: async (userData) => {
    const data = await fetchWithAuth('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    if (data.token) {
      setToken(data.token);
    }
    return data;
  },

  login: async (credentials) => {
    const data = await fetchWithAuth('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    if (data.token) {
      setToken(data.token);
    }
    return data;
  },

  getProfile: async () => {
    return await fetchWithAuth('/auth/profile');
  },

  logout: () => {
    removeToken();
  },

  isAuthenticated: () => {
    return !!getToken();
  },
};

export const notesAPI = {
  getAll: async () => {
    return await fetchWithAuth('/notes');
  },

  getById: async (id) => {
    return await fetchWithAuth(`/notes/${id}`);
  },

  create: async (noteData) => {
    return await fetchWithAuth('/notes', {
      method: 'POST',
      body: JSON.stringify(noteData),
    });
  },

  update: async (id, noteData) => {
    return await fetchWithAuth(`/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(noteData),
    });
  },

  delete: async (id) => {
    return await fetchWithAuth(`/notes/${id}`, {
      method: 'DELETE',
    });
  },
};

export default {
  auth: authAPI,
  notes: notesAPI,
};
