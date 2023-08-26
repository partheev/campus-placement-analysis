import axios from 'axios';

// initializing the axios instance with custom configs
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
});
console.log(import.meta.env.VITE_BACKEND_URL);

export default api;
