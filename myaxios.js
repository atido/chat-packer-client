import axios from "axios";

const myaxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_HOST}`,
});

myaxios.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  if (storedToken) {
    config.headers = { Authorization: `Bearer ${storedToken}` };
  }
  return config;
});

export default myaxios;
