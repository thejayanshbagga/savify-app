import axios from 'axios';
import { getToken } from './secureStore';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

// Attach token to every request

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
