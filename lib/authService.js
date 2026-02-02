import api from "./api";

export async function signup(email, password) {
  console.log("CALLING SIGNUP API", email);
  const response = await api.post("/api/auth/signup", { email, password });
  return response.data;
}

export async function login(email, password) {
  const response = await api.post("/api/auth/login", { email, password });
  return response.data; // expects { token }
}
