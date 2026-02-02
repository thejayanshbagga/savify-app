import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleReset = async () => {
  if (!email.trim()) {
    Alert.alert('Missing Email', 'Please enter your email.');
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      throw new Error('Request failed');
    }

    Alert.alert(
      'Check your email',
      'If an account exists, a reset link has been sent.'
    );

    navigation.goBack();
  } catch {
    Alert.alert('Error', 'Could not send reset email.');
  }
};

  return (
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-5 px-6`}>
        <Text style={tw`text-white`}>&larr; Back</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView
        style={tw`flex-1 justify-center px-6`}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={tw`text-2xl font-bold text-white text-center mb-6`}>
          Reset Your Password
        </Text>

        <TextInput
          style={tw`border border-gray-300 p-3 mb-4 rounded-2 bg-white`}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={tw`bg-black py-3 rounded-2`} onPress={handleReset}>
          <Text style={tw`text-center text-white font-bold`}>
            Send Reset Link
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
