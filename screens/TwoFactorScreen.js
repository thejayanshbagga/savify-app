// screens/TwoFactorScreen.js
import React, { useState, useContext, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import createStyles from '../styles/TwoFactorScreen.styles';
import useTheme from '../hooks/useTheme';

// ---------------------------------------------------------------------------
// OTP INPUT  —  six individual cells that behave as one logical input.
// Typing auto-advances; backspace moves back.  Paste of a 6-digit string fills
// all cells at once (common when users copy from SMS fallback or password mgr).
// ---------------------------------------------------------------------------
function OTPInput({ value, onChange, hasError, styles, palette }) {
  const inputRef = useRef(null);
  const LENGTH  = 6;

  const handleChangeText = useCallback((text) => {
    const digits = text.replace(/\D/g, '').slice(0, LENGTH);
    onChange(digits);
  }, [onChange]);

  return (
    <Pressable onPress={() => inputRef.current?.focus()} style={styles.otpRow}>
      {Array.from({ length: LENGTH }, (_, i) => {
        const isFocused = value.length === i;
        const isFilled  = i < value.length;
        return (
          <View
            key={i}
            style={[
              styles.otpCell,
              isFocused && styles.otpCellFocused,
              isFilled  && styles.otpCellFilled,
              hasError  && styles.otpCellError,
            ]}
          >
            <Text style={styles.otpDigit}>{value[i] || ''}</Text>
            {isFocused && <View style={styles.cursor} />}
          </View>
        );
      })}

      {/* Hidden real TextInput that captures keyboard events */}
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={value}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        maxLength={LENGTH}
        autoComplete="one-time-code"
        textContentType="oneTimeCode"
        importantForAutofill="yes"
        autoFocus
        caretHidden
      />
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// SCREEN
// ---------------------------------------------------------------------------
export default function TwoFactorScreen({ navigation }) {
  const [code,    setCode]    = useState('');
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');

  const { verify2FA, signOut } = useContext(AuthContext);
  const { palette } = useTheme();
  const styles = createStyles(palette);

  const handleVerify = async () => {
    if (code.length !== 6) {
      setError('Please enter all 6 digits.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await verify2FA(code);
      // On success the AuthContext token is set — your app's normal
      // auth-state routing will take over and navigate away from here.
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || 'Invalid code. Try again.');
      setCode('');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    await signOut();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.iconWrapper}>
          <Feather name="shield" size={32} color={palette.accent} />
        </View>

        <Text style={styles.title}>Two-Factor Authentication</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code from your authenticator app to continue.
        </Text>

        <OTPInput
          value={code}
          onChange={setCode}
          hasError={!!error}
          styles={styles}
          palette={palette}
        />

        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <View style={styles.errorPlaceholder} />
        )}

        <TouchableOpacity
          style={[styles.button, (loading || code.length !== 6) && styles.buttonDisabled]}
          onPress={handleVerify}
          disabled={loading || code.length !== 6}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" size="small" />
          ) : (
            <Text style={styles.buttonText}>Verify</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={styles.cancelLink}>
          <Text style={styles.cancelText}>Cancel and go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}