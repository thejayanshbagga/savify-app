import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const features = [
    {
      title: 'Savify Save',
      summary: 'Auto-save, track expenses, hit your goals.',
      details: [
        'Round-Up Savings',
        'Expense Tracking & Budgeting',
        'Goal-Based Saving',
      ],
    },
    {
      title: 'Savify Split',
      summary: 'Split bills, track dues, and remind friends.',
      details: [
        'Shared bills',
        'Track balances',
        'Reminder system',
      ],
    },
    {
      title: 'Savify Score',
      summary: 'Gamify your savings journey.',
      details: [
        'Points & streaks',
        'Custom rewards',
        'Challenges & badges',
      ],
    },
  ];

  return (
    <View style={homeStyles.container}>
      <ScrollView contentContainerStyle={homeStyles.scrollContent}>
        <Text style={homeStyles.pageTitle}>Features</Text>

        {features.map((item, idx) => (
          <View key={idx} style={homeStyles.card}>
            <Text style={homeStyles.cardTitle}>{item.title}</Text>
            <Text style={homeStyles.cardSummary}>{item.summary}</Text>
            {item.details.map((line, i) => (
              <Text key={i} style={homeStyles.cardDetail}>• {line}</Text>
            ))}
          </View>
        ))}

        <TouchableOpacity
          style={homeStyles.button}
          onPress={() => navigation.navigate('Calculator')}
        >
          <Text style={homeStyles.buttonText}>Try Savings Calculator</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 100,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#000000',
    marginBottom: 32,
    letterSpacing: -0.5,
  },
  card: {
    backgroundColor: '#FAFAFA',
    padding: 24,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  cardSummary: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 16,
    fontWeight: '400',
  },
  cardDetail: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 6,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
});