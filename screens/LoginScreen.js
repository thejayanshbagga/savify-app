// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // alert('✅ Logged in (hook up API)');
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}
>
      <View style={tw`flex-1 justify-center px-6`}>
        <Text style={tw`text-2xl font-bold text-center text-primary mb-6`}>Welcome Back to Savify</Text>

        <TextInput
          style={tw`border border-gray-300 p-3 mb-4 rounded`}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={tw`border border-gray-300 p-3 mb-4 rounded`}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={handleLogin}>
          <Text style={tw`text-center text-white font-bold`}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`mt-4 border border-primary py-3 rounded`}>
          <Text style={tw`text-center text-primary font-bold`}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
