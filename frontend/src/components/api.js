import axios from 'axios';

const API_BASE_URL = 'http://localhost:5003/api';

// Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example endpoints (you can add more as needed)
export const login = (username, password) => api.post('/login', { username, password });
export const register = (username, password) => api.post('/register', { username, password });
export const getVerses = (token) =>
    api.get('/verses', {
        headers: { Authorization: `Bearer ${token}` },
    });
export const addVerse = (verseData, token) =>
    api.post('/verses', verseData, {
        headers: { Authorization: `Bearer ${token}` },
    });
export const updateVerse = (id, verseData, token) =>
    api.put(`/verses/${id}`, verseData, {
        headers: { Authorization: `Bearer ${token}` },
    });
export const deleteVerse = (id, token) =>
    api.delete(`/verses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

export default api;
