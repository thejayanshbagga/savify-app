import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function ForgotPasswordScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg text-gray-700`}>Password reset coming soon!</Text>
    </View>
  );
}
