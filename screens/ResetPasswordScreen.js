import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState('');
  const route = useRoute();
  const navigation = useNavigation();

  const token = route.params?.token;

  const handleSubmit = async () => {
    if (!password) {
      Alert.alert('Error', 'Please enter a new password.');
      return;
    }

    const res = await fetch(`${API_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword: password }),
    });

    if (!res.ok) {
      Alert.alert('Error', 'Invalid or expired link.');
      return;
    }

    Alert.alert('Success', 'Password reset successfully.');
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Set a new password</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}
