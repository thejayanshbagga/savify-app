// screens/SignupScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export default function SignupScreen() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useContext(AuthContext);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please ensure both passwords are the same.');
      return;
    }

    try {
      await signUp(email.trim(), password);
      // ✅ AuthContext will log the user in and App.js will auto-redirect to MainTabs
    } catch (err) {
      console.error(err);
      Alert.alert('Signup failed', 'That email may already be in use or server error.');
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={tw`flex-1 justify-center px-6`}
      >
        <Text style={tw`text-2xl font-bold text-primary text-center mb-6`}>
          {step === 1 ? 'Join Savify Now!' : `Create a password for ${email}`}
        </Text>

        {step === 1 ? (
          <>
            <TextInput
              style={tw`border border-gray-300 p-3 mb-4 rounded-2 bg-white`}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={() => setStep(2)}>
              <Text style={tw`p-3 rounded-2 bg-black text-center text-white font-bold`}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={tw`border border-gray-300 p-3 mb-4 rounded-2 bg-white`}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={tw`border border-gray-300 p-3 mb-4 rounded-2 bg-white`}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={tw`bg-primary py-3 rounded mb-3`} onPress={() => setStep(1)}>
              <Text style={tw`p-3 rounded-2 bg-black text-center text-white font-bold`}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={handleSignup}>
              <Text style={tw`p-3 rounded-2 bg-black text-center text-white font-bold`}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
