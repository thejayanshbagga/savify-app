// screens/LoginScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import createStyles from '../styles/LoginScreen.styles';
import useTheme from '../hooks/useTheme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe]   = useState(false);
  const [loading, setLoading]         = useState(false);

  const { signIn, requires2FA } = useContext(AuthContext);
  const { palette } = useTheme();
  const styles = createStyles(palette);

  // ── Navigate to 2FA screen as soon as the context flips the flag ─────────
  useEffect(() => {
    if (requires2FA) {
      navigation.navigate('TwoFactor');
    }
  }, [requires2FA, navigation]);
  // ──────────────────────────────────────────────────────────────────────────

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signIn(email.trim(), password);
      // If 2FA is NOT required, signIn already set the token and the app
      // will navigate via its normal auth-state-based routing.
      // If 2FA IS required, the useEffect above handles navigation.
    } catch (error) {
      console.error(error);
      alert('Login failed. Check your email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={palette.textSecondary}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={palette.textSecondary}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color={palette.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxActive]}>
              {rememberMe && <View style={styles.checkboxInner} />}
            </View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.5 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? 'Signing in…' : 'Sign In'}</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../assets/google-logo.png')}
            style={styles.googleLogo}
            resizeMode="contain"
          />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}