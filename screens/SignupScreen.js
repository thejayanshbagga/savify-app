// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    alert('✅ Signed up (hook up your API here)');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}
>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={tw`flex-1 justify-center px-6`}>
        <Text style={tw`text-2xl font-bold text-primary text-center mb-6`}>
          {step === 1 ? 'Join Savify Now!' : `Create a password for ${email}`}
        </Text>

        {step === 1 ? (
          <>
            <TextInput
              style={tw`border border-gray-300 p-3 rounded mb-4`}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={() => setStep(2)}>
              <Text style={tw`text-center text-white font-bold`}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={tw`border border-gray-300 p-3 rounded mb-4`}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={tw`bg-gray-200 py-3 rounded mb-3`} onPress={() => setStep(1)}>
              <Text style={tw`text-center text-gray-700`}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={handleSignup}>
              <Text style={tw`text-center text-white font-bold`}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
