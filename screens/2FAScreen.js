import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

export default function TwoFAScreen({ navigation }) {
  const [enabled, setEnabled] = useState(false);
  const [phone, setPhone] = useState('');

  const toggle2FA = async () => {
    if (!enabled && !phone) {
      Alert.alert("Phone required", "Enter a phone number to enable 2FA");
      return;
    }

    setEnabled(!enabled);

    // Update backend (example: Supabase)
    // await supabase.from('users').update({
    //   twoFactorEnabled: !enabled,
    //   phone: phone
    // }).eq('id', user.id);

    Alert.alert("Updated", `Two-factor auth ${!enabled ? "enabled" : "disabled"}`);
  };

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Two-Factor Authentication</Text>

      <Text style={tw`mb-2`}>Phone Number</Text>
      <TextInput
        style={tw`border border-gray-300 p-3 rounded mb-4`}
        placeholder="+1 555 123 4567"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg`}>Enable 2FA</Text>
        <Switch value={enabled} onValueChange={toggle2FA} />
      </View>

      <TouchableOpacity
        style={tw`bg-blue-600 py-3 rounded`}
        onPress={() => navigation.goBack()}
      >
        <Text style={tw`text-white text-center font-bold`}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
