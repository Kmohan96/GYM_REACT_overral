import axios from "axios";
const api = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://gym-project-new.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  // Do not attach token for auth endpoints
  if (
    token &&
    !config.url.includes("/login") &&
    !config.url.includes("/register") &&
    !config.url.includes("/token")
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
