import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';


export default function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
    <View style={tw`flex-1 justify-center px-6 bg-white`}>
      <Text style={tw`text-2xl text-center font-bold text-blue-500 mb-6`}>
        {step === 1 ? 'Join Savify Now!' : `Create a password for ${email}`}
      </Text>
      {step === 1 ? (
        <>
          <TextInput
            style={tw`border border-gray-300 p-3 mb-4 rounded`}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <TouchableOpacity style={tw`bg-blue-500 py-3 rounded`} onPress={() => setStep(2)}>
            <Text style={tw`text-center text-white font-bold`}>Next</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={tw`border border-gray-300 p-3 mb-4 rounded`}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={tw`bg-gray-200 py-3 rounded mb-3`} onPress={() => setStep(1)}>
            <Text style={tw`text-center text-gray-700`}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-blue-500 py-3 rounded`}>
            <Text style={tw`text-center text-white font-bold`}>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
    </SafeAreaView>
  );
}
