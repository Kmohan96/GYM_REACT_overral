import axios from "axios";

const api = axios.create({
  // baseURL: "https://gym-react-overral-1.onrender.com/", 
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  // Don't attach token for auth endpoints
  if (
    token &&
    !config.url.includes("/token") &&
    !config.url.includes("/register")
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
