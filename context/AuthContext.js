import React, { createContext, useEffect, useMemo, useState, useCallback } from 'react';
import api, { attachToken } from '../lib/api';
import { login as apiLogin, signup as apiSignup } from '../lib/authService';
import { saveToken, getToken, clearToken } from '../lib/secureStore';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore token on app start
  useEffect(() => {
    (async () => {
      const existing = await getToken();
      if (existing) {
        setToken(existing);
        attachToken(existing);   // ✅ attach token immediately on load
      }
      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (email, password) => {
    const { token } = await apiLogin(email, password);
    await saveToken(token);
    setToken(token);
    attachToken(token);          // ✅ attach after login
  }, []);

  const signUp = useCallback(async (email, password) => {
  const { token } = await apiSignup(email, password); // backend returns token now
  await saveToken(token);
  setToken(token);
  attachToken(token); // ✅ auto-authenticated
  }, []);



  const signOut = useCallback(async () => {
    await clearToken();
    setToken(null);
    attachToken(null);           // ✅ remove from headers
  }, []);

  const value = useMemo(() => ({
    token,
    isAuthenticated: !!token,
    loading,
    signIn,
    signUp,
    signOut,
  }), [token, loading, signIn, signUp, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
