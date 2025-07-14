import axios from "axios";
import { KODIK_BASE_URL } from "@/config/env.ts";

const api = axios.create({
  baseURL: KODIK_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;