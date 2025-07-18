import axios from "axios";

const api = axios.create({
  baseURL: "https://yagames.noilty.com/api/",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;