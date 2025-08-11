import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/ChangeEmailScreen.styles';
import useTranslation from '../hooks/useTranslations';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useSafeTranslator = () => {
  const tRaw = useTranslation();
  return (k, f) =>
    typeof tRaw === 'function'
      ? tRaw(k, f)
      : tRaw && tRaw[k] != null
      ? tRaw[k]
      : f;
};

export default function ChangeEmailScreen() {
  const tr = useSafeTranslator();
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!newEmail || !password) {
      Alert.alert(tr('missingInfo', 'Missing info'), tr('missingInfoMsg', 'Please fill out all fields.'));
      return false;
    }
    if (!emailRegex.test(newEmail.trim())) {
      Alert.alert(tr('invalidEmail', 'Invalid email'), tr('invalidEmailMsg', 'Please enter a valid email address.'));
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      await new Promise(r => setTimeout(r, 600)); // fake latency
      Alert.alert(tr('verificationSent', 'Verification sent'), tr('verificationSentMsg', 'We emailed a verification link to your new address. Please confirm to complete the change.'));
      setNewEmail('');
      setPassword('');
    } catch (err) {
      Alert.alert(tr('changeEmailErrorTitle', 'Error'), err?.message || tr('changeEmailErrorMsg', 'Failed to change email. Try again.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tr('changeEmailTitle', 'Change Email')}</Text>

      <View style={styles.field}>
        <Text style={styles.label}>{tr('newEmailLabel', 'New email')}</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={newEmail}
            onChangeText={setNewEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={tr('emailPlaceholder', 'name@example.com')}
            style={styles.input}
            textContentType="emailAddress"
          />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>{tr('currentPasswordLabel', 'Current password (for security)')}</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPw}
            placeholder={tr('currentPasswordPlaceholder', 'Enter current password')}
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />
          <TouchableOpacity
            onPress={() => setShowPw(s => !s)}
            style={styles.eye}
            accessibilityRole="button"
            accessibilityLabel={tr('togglePasswordVisibility', 'Toggle password visibility')}
          >
            <Text style={{ fontSize: 12 }}>{showPw ? tr('hide', 'HIDE') : tr('show', 'SHOW')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={onSubmit}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{loading ? tr('updateEmailLoading', 'Sending…') : tr('updateEmailButton', 'Update Email')}</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        {tr('updateEmailNote', 'After you tap “Update Email,” check your inbox.')}
      </Text>
    </View>
  );
}
