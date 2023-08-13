import axios from 'axios';

// initializing the axios instance with custom configs
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
});

export default api;
