import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ChangePassword.styles';

export default function ChangePasswordScreen() {
  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState({ old: false, next: false, confirm: false });

  const validate = () => {
    if (!oldPw || !newPw || !confirmPw) {
      Alert.alert('Missing info', 'Please fill out all fields.');
      return false;
    }
    if (newPw.length < 8) {
      Alert.alert('Weak password', 'New password must be at least 8 characters.');
      return false;
    }
    if (newPw !== confirmPw) {
      Alert.alert('Mismatch', 'Passwords do not match.');
      return false;
    }
    if (newPw === oldPw) {
      Alert.alert('No change', 'New password must be different from the old password.');
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
      // await api.auth.changePassword({ oldPassword: oldPw, newPassword: newPw });

      await new Promise(r => setTimeout(r, 600)); // fake latency
      Alert.alert('Success', 'Your password has been updated.');
      setOldPw('');
      setNewPw('');
      setConfirmPw('');
    } catch (err) {
      Alert.alert('Error', err?.message || 'Failed to change password. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const Eye = ({ which }) => (
    <TouchableOpacity
      onPress={() => setShow(s => ({ ...s, [which]: !s[which] }))}
      style={styles.eye}
      accessibilityRole="button"
      accessibilityLabel="Toggle password visibility"
    >
      <Ionicons name={show[which] ? 'eye-off-outline' : 'eye-outline'} size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Current password</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={oldPw}
            onChangeText={setOldPw}
            secureTextEntry={!show.old}
            placeholder="Enter current password"
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />
          <Eye which="old" />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>New password</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={newPw}
            onChangeText={setNewPw}
            secureTextEntry={!show.next}
            placeholder="Enter new password"
            style={styles.input}
            autoCapitalize="none"
          />
          <Eye which="next" />
        </View>
        <Text style={styles.hint}>Use 8+ characters. Mix letters, numbers, symbols.</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Confirm new password</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={confirmPw}
            onChangeText={setConfirmPw}
            secureTextEntry={!show.confirm}
            placeholder="Re-enter new password"
            style={styles.input}
            autoCapitalize="none"
          />
          <Eye which="confirm" />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={onSubmit}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{loading ? 'Saving…' : 'Update Password'}</Text>
      </TouchableOpacity>
    </View>
  );
}