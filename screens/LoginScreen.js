// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}
>
      <View style={tw`flex-1 justify-center px-6`}>
        <Text style={tw`text-5xl font-bold text-left text-primary mb-6`}>Welcome back! Glad to see you again!</Text>

        {/*Email address input*/}
        <TextInput
          style={tw`border border-gray-300 p-3 mb-4 rounded-2 bg-white`}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/*Password input with show password eye icon*/}
        <View style={tw`flex-row items-center border border-gray-300 rounded-2 bg-white mb-4 px-3`}>
          <TextInput
              style={tw`flex-1 py-3`}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={22} color="#333" />
          </TouchableOpacity>
        </View>

        {/*Login button*/}
        <TouchableOpacity style={tw`bg-primary py-3 rounded`} onPress={handleLogin}>
          <Text style={tw`border border-white-300 p-3 rounded-2 bg-black text-center text-white font-bold`}>
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`mt-4 border border-primary py-3 rounded`}>
          <Text style={tw`text-center text-primary font-bold`}>Continue with Google</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
