import axios from 'axios';

// initializing the axios instance with custom configs
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/api',
    // timeout: 10000,
});

export default api;
