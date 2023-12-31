import axios from 'axios';

const myaxios = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_BACKEND_HOST}`,
});

myaxios.interceptors.request.use(config => {
  const storedToken = localStorage.getItem('authToken');
  const sessionToken = localStorage.getItem('sessionToken');
  if (storedToken) {
    config.headers = { ...config.headers, Authorization: `Bearer ${storedToken}` };
  }
  if (sessionToken) {
    config.headers = { ...config.headers, 'x-session-token': sessionToken };
  }
  return config;
});

myaxios.interceptors.response.use(
  response => response,
  error => {
    let message = '';
    if (error.response) {
      message = error.response.data.message || 'Functional error.';
      console.error(message, {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
      });
    } else if (error.request) {
      message = 'Network error.';
      console.error(message, error.request);
    } else {
      message = 'An error occurred. Please try again later.';
      console.error(message, error.message);
    }
    return Promise.reject({ ...error, message });
  }
);

export default myaxios;
