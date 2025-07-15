import axios from "axios";

const api = axios.create({
  baseURL: "https://kodikapi.com",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;