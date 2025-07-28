import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email.trim()) {
      Alert.alert('Missing Email', 'Please enter your email to reset your password.');
      return;
    }

    // Placeholder for actual reset logic / API call
    Alert.alert('Reset Link Sent', `A password reset link has been sent to ${email}.`);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}>
      <KeyboardAvoidingView
        style={tw`flex-1 justify-center px-6`}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={tw`text-2xl font-bold text-primary text-center mb-6`}>
          Reset Your Password
        </Text>

        <TextInput
          style={tw`border border-gray-300 p-3 mb-4 rounded-2 bg-white`}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={handleReset}>
          <Text style={tw`border border-white-300 p-3 rounded-2 bg-black text-center text-white font-bold`}>Send Reset Link</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
