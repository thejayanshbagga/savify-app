import axios from 'axios';

// 👇 Replace with your actual LAN IP
const BASE_URL = __DEV__
  ? 'http://10.0.0.158:5000'
  : 'https://savify.ca';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// ✅ Helper to attach/remove token
export const attachToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;