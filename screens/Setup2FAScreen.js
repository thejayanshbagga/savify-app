// screens/Setup2FAScreen.js
//
// Handles the full 2FA enrollment UX:
//   Step 1 — Show a QR code (+ manual key as fallback)
//   Step 2 — User enters a code to prove their authenticator is synced
//   Step 3 — Confirmation screen

import React, { useState, useContext, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Clipboard,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { AuthContext } from '../context/AuthContext';
import createStyles from '../styles/Setup2FAScreen.styles';
import useTheme from '../hooks/useTheme';

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

// Extract the raw secret from an otpauth:// URI for the manual-entry fallback.
// otpauth://totp/Savify:email@example.com?secret=BASE32SECRET&issuer=Savify
function extractSecret(otpAuthUri) {
  try {
    const params = new URLSearchParams(otpAuthUri.split('?')[1]);
    return params.get('secret');
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// SCREEN
// ---------------------------------------------------------------------------
export default function Setup2FAScreen({ navigation }) {
  const [step,       setStep]       = useState(1);   // 1 = QR, 2 = verify, 3 = success
  const [otpAuthUri, setOtpAuthUri] = useState(null);
  const [code,       setCode]       = useState('');
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState('');

  const { setup2FA, confirmSetup2FA } = useContext(AuthContext);
  const { palette } = useTheme();
  const styles = createStyles(palette);

  // ---------------------------------------------------------------------------
  // On mount — call the backend to generate + store the secret, get the URI
  // ---------------------------------------------------------------------------
  const initSetup = useCallback(async () => {
    setLoading(true);
    setError('');

    console.log('Setup 2FA Response: ', res);
    try {
      const res = await setup2FA();
      setOtpAuthUri(res.otpAuthUri);
    } catch (err) {
      console.error(err);
      setError('Failed to initialize 2FA setup. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [setup2FA]);

  useEffect(() => { initSetup(); }, [initSetup]);

  // ---------------------------------------------------------------------------
  // Step 2 — verify the code the user typed
  // ---------------------------------------------------------------------------
  const handleVerify = async () => {
    if (code.length !== 6) {
      setError('Please enter all 6 digits.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await confirmSetup2FA(code);
      setStep(3);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || 'Invalid code. Try again.');
      setCode('');
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------
  const secret = otpAuthUri ? extractSecret(otpAuthUri) : null;

  // ── Step 1: QR Code ──────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Feather name="arrow-left" size={22} color={palette.textSecondary} />
          </TouchableOpacity>

          <Text style={styles.title}>Set up Two-Factor Auth</Text>
          <Text style={styles.subtitle}>
            Open your authenticator app (Google Authenticator, Authy, etc.) and scan the QR code below.
          </Text>

          {loading && !otpAuthUri ? (
            <ActivityIndicator size="large" color={palette.accent} style={{ marginVertical: 40 }} />
          ) : otpAuthUri ? (
            <>
              <View style={styles.qrContainer}>
                <View style={styles.qrWhiteBg}>
                  <QRCode value={otpAuthUri} size={200} />
                </View>
              </View>

              {secret && (
                <View style={styles.manualSection}>
                  <Text style={styles.manualLabel}>Can't scan? Enter this key manually:</Text>
                  <View style={styles.keyRow}>
                    <Text style={styles.keyText} selectable>{secret}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        Clipboard.setString(secret);
                        Alert.alert('Copied', 'Secret key copied to clipboard.');
                      }}
                    >
                      <Feather name="copy" size={18} color={palette.accent} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {error && <Text style={styles.errorText}>{error}</Text>}

              <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
                <Text style={styles.buttonText}>I've scanned the code</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.errorText}>{error}</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Step 2: Enter verification code ──────────────────────────────────────
  if (step === 2) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">

          <TouchableOpacity
            onPress={() => { setStep(1); setError(''); setCode(''); }}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={22} color={palette.textSecondary} />
          </TouchableOpacity>

          <Text style={styles.title}>Verify Your Setup</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit code currently shown in your authenticator app to confirm setup.
          </Text>

          <TextInput
            style={[styles.codeInput, error && styles.codeInputError]}
            value={code}
            onChangeText={(t) => { setCode(t.replace(/\D/g, '').slice(0, 6)); setError(''); }}
            keyboardType="numeric"
            maxLength={6}
            placeholder="######"
            placeholderTextColor={palette.textSecondary}
            autoComplete="one-time-code"
            textContentType="oneTimeCode"
            autoFocus
            textAlign="center"
          />

          {error && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity
            style={[styles.button, (loading || code.length !== 6) && styles.buttonDisabled]}
            onPress={handleVerify}
            disabled={loading || code.length !== 6}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.buttonText}>Confirm</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Step 3: Success ──────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Feather name="check-circle" size={48} color={palette.accent} />
        </View>

        <Text style={styles.title}>2FA Enabled!</Text>
        <Text style={styles.subtitle}>
          Two-factor authentication is now active on your account. You'll be asked for a code each time you sign in.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}