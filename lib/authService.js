import api from './api';

// call backend signup
export const signup = async (email, password) => {
  const res = await api.post('/api/auth/signup', { email, password });
  return res.data; // server returns { message: "...", maybe token }
};

// call backend login
export const login = async (email, password) => {
  const res = await api.post('/api/auth/login', { email, password });
  return res.data; // server returns { message: "Login successful", token }
};
