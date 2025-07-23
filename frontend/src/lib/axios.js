import axios from 'axios';

// instance of axios with a base URL and default headers
const api = axios.create({
  baseURL: '/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor automatically includes the token in every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // If a token exists, add it to the 'x-auth-token' header
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    // handles errors during the request sending phase
    return Promise.reject(error);
  }
);

export default api;
