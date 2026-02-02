import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import createStyles from '../styles/SignupScreen.styles';
import useTheme from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { palette } = useTheme();
  const styles = createStyles(palette);
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleSignup = async () => {
    console.log('Signup attempt with:', email, password, confirmPassword);
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please ensure both passwords are the same.');
      return;
    }

    try {
      await signUp(email.trim(), password);

      Alert.alert(
        "Account created",
        "Your account has been created successfully. Please log in."
      );

      navigation.navigate("Login");
    } catch (err) {
      Alert.alert(
        "Signup failed",
        err?.response?.data?.message || "Server error"
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <Text style={styles.title}>
          {step === 1 ? 'Create your account' : 'Set your password'}
        </Text>
        <Text style={styles.subtitle}>
          {step === 1 ? 'Enter your email to get started' : `For ${email}`}
        </Text>

        {step === 1 ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholderTextColor={palette.textSecondary}
            />
            <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={palette.textSecondary}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor={palette.textSecondary}
            />
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => setStep(1)}>
              <Text style={styles.buttonSecondaryText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}