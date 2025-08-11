import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import styles from '../styles/ChangeEmailScreen.styles';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ChangeEmailScreen() {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!newEmail || !password) {
      Alert.alert('Missing info', 'Please fill out all fields.');
      return false;
    }
    if (!emailRegex.test(newEmail.trim())) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validate()) return;
    try {
      setLoading(true);

      // TODO: replace with your real API / auth provider call
      // Example placeholder:
      // await api.auth.changeEmail({ newEmail, password });

      await new Promise(r => setTimeout(r, 600)); // fake latency
      Alert.alert(
        'Verification sent',
        'We emailed a verification link to your new address. Please confirm to complete the change.'
      );
      setNewEmail('');
      setPassword('');
    } catch (err) {
      Alert.alert('Error', err?.message || 'Failed to change email. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Email</Text>

      <View style={styles.field}>
        <Text style={styles.label}>New email</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={newEmail}
            onChangeText={setNewEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="name@example.com"
            style={styles.input}
            textContentType="emailAddress"
          />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Current password (for security)</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPw}
            placeholder="Enter current password"
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />
          <TouchableOpacity
            onPress={() => setShowPw(s => !s)}
            style={styles.eye}
            accessibilityRole="button"
            accessibilityLabel="Toggle password visibility"
          >
            <Text style={{ fontSize: 12 }}>{showPw ? 'HIDE' : 'SHOW'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={onSubmit}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{loading ? 'Sending…' : 'Update Email'}</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        After you tap “Update Email,” check your inbox.
      </Text>
    </View>
  );
}