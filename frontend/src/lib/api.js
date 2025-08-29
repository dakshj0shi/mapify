import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000",
  withCredentials: false,
});

// Example request interceptor (adds auth header later when backend is ready)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // partner will replace with real token
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
