// context/AuthContext.js
import React, { createContext, useEffect, useMemo, useState, useCallback } from 'react';
import api from '../lib/api';
import { login as apiLogin, signup as apiSignup } from '../lib/authService';
import { saveToken, getToken, clearToken } from '../lib/secureStore';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token,          setToken]          = useState(null);
  const [loading,        setLoading]        = useState(true);

  // ── 2FA state ──────────────────────────────────────────────────────────
  const [pendingToken,   setPendingToken]   = useState(null);   // short-lived token from login when 2FA is required
  const [requires2FA,    setRequires2FA]    = useState(false);  // flag that drives navigation to the 2FA screen
  // ────────────────────────────────────────────────────────────────────────

  // Restore token on app start
  useEffect(() => {
    (async () => {
      const existing = await getToken();
      if (existing) {
        setToken(existing);
      }
      setLoading(false);
    })();
  }, []);

  // ---------------------------------------------------------------------------
  // SIGN IN  (now handles the two-phase 2FA flow)
  // ---------------------------------------------------------------------------
  const signIn = useCallback(async (email, password) => {
    const res = await apiLogin(email, password);

    if (res.requires2FA) {
      // Phase 1 complete — credentials valid, but 2FA code still needed.
      // Store the pending token in memory (NOT in SecureStore — it's intentionally
      // short-lived and must not survive an app restart).
      setPendingToken(res.pendingToken);
      setRequires2FA(true);
      return; // caller (LoginScreen) will see requires2FA flip and navigate
    }

    // No 2FA (or 2FA not enabled) — full token arrived, proceed as before
    await saveToken(res.token);
    setToken(res.token);
  }, []);

  // ---------------------------------------------------------------------------
  // VERIFY 2FA CODE  (phase 2 of login)
  // ---------------------------------------------------------------------------
  const verify2FA = useCallback(async (code) => {
    if (!pendingToken) throw new Error("No pending 2FA session");

    // Send the code + the pending token to the backend
    const { data } = await api.post(
      "/api/auth/2fa/verify",
      { code },
      { headers: { Authorization: `Bearer ${pendingToken}` } }
    );

    // Success — we now have the real session token
    await saveToken(data.token);
    setToken(data.token);

    // Clean up 2FA state
    setPendingToken(null);
    setRequires2FA(false);
  }, [pendingToken]);

  // ---------------------------------------------------------------------------
  // SETUP 2FA  (called from a Settings screen after the user opts in)
  // ---------------------------------------------------------------------------
  const setup2FA = useCallback(async () => {
    // requireAuth on the backend means this uses the existing full session token
    const res = await api.post("/api/auth/2fa/setup");
    return res.data;   // caller renders this as a QR code
  }, []);

  // ---------------------------------------------------------------------------
  // CONFIRM 2FA ENROLLMENT  (user scanned QR, now submits a code to prove it)
  // ---------------------------------------------------------------------------
  const confirmSetup2FA = useCallback(async (code) => {
    const { data } = await api.post("/api/auth/2fa/verify-setup", { code });
    return data;
  }, []);

  // ---------------------------------------------------------------------------
  // DISABLE 2FA
  // ---------------------------------------------------------------------------
  const disable2FA = useCallback(async (code) => {
    const { data } = await api.post("/api/auth/2fa/disable", { code });
    return data;
  }, []);

  // ---------------------------------------------------------------------------
  // SIGN UP  (unchanged)
  // ---------------------------------------------------------------------------
  const signUp = useCallback(async (email, password) => {
    const { token } = await apiSignup(email, password);
    await saveToken(token);
    setToken(token);
  }, []);

  // ---------------------------------------------------------------------------
  // SIGN OUT  (clears 2FA state too)
  // ---------------------------------------------------------------------------
  const signOut = useCallback(async () => {
    await clearToken();
    setToken(null);
    setPendingToken(null);
    setRequires2FA(false);
  }, []);

  const value = useMemo(() => ({
    token,
    isAuthenticated: !!token,
    loading,
    // existing
    signIn,
    signUp,
    signOut,
    // 2FA
    requires2FA,
    verify2FA,
    setup2FA,
    confirmSetup2FA,
    disable2FA,
  }), [token, loading, signIn, signUp, signOut, requires2FA, verify2FA, setup2FA, confirmSetup2FA, disable2FA]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}