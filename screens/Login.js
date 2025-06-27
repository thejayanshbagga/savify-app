import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
    <View style={tw`flex-1 justify-center px-6 bg-white`}>
      <Text style={tw`text-2xl text-center font-bold text-blue-500 mb-6`}>Login to Savify</Text>
      <TextInput
        style={tw`border border-gray-300 p-3 mb-4 rounded`}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={tw`border border-gray-300 p-3 mb-4 rounded`}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={tw`bg-blue-500 py-3 rounded`}>
        <Text style={tw`text-center text-white font-bold`}>Log In</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
