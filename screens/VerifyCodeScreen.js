import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

export default function VerifyCodeScreen({ route, navigation }) {
  const { userId } = route.params;
  const [code, setCode] = useState('');

  const verifyCode = async () => {
    // Call backend to check code
    // const { success } = await supabase.rpc('verify_code', { user_id: userId, code });

    const success = code === "123456"; // TEMP for testing

    if (success) {
      navigation.replace('MainTabs');
    } else {
      Alert.alert("Invalid Code", "Please try again.");
    }
  };

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Enter Verification Code</Text>

      <TextInput
        style={tw`border border-gray-300 p-3 rounded mb-4`}
        placeholder="123456"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={tw`bg-blue-600 py-3 rounded`}
        onPress={verifyCode}
      >
        <Text style={tw`text-white text-center font-bold`}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
