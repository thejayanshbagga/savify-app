// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const features = [
    {
      title: 'Savify Save',
      summary: 'Auto-save, track expenses, hit your goals.',
      details: [
        '• Round-Up Savings',
        '• Expense Tracking & Budgeting',
        '• Goal-Based Saving'
      ],
    },
    {
      title: 'Savify Split',
      summary: 'Split bills, track dues, and remind friends.',
      details: [
        '• Shared bills',
        '• Track balances',
        '• Reminder system'
      ],
    },
    {
      title: 'Savify Score',
      summary: 'Gamify your savings journey.',
      details: [
        '• Points & streaks',
        '• Custom rewards',
        '• Challenges & badges'
      ],
    },
  ];

  return (
    <ScrollView style={tw`bg-[#5C8EDC] flex-1 px-6 pt-12`}>
      <Text style={tw`text-3xl text-center font-bold text-primary mb-6`}>Your Features</Text>

      {features.map((item, idx) => (
        <View key={idx} style={tw`bg-white p-6 rounded-2xl mb-6`}>
          <Text style={tw`text-xl font-bold text-primary mb-1`}>{item.title}</Text>
          <Text style={tw`text-gray-700 mb-2`}>{item.summary}</Text>
          {item.details.map((line, i) => (
            <Text key={i} style={tw`text-gray-600 text-sm`}>{line}</Text>
          ))}
        </View>
      ))}

      <TouchableOpacity
        style={tw`bg-primary py-3 rounded-full mt-6`}
        onPress={() => navigation.navigate('Calculator')}>
        <Text style={tw`text-center text-white font-bold`}>Try Savings Calculator</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
