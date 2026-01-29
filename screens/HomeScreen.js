import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import COLORS from '../styles/colors';
import { FONT_FAMILY } from '../styles/typography';

export default function HomeScreen() {
  const navigation = useNavigation();

  const features = [
    {
      title: 'Savify Save',
      summary: 'Auto-save, track expenses, hit your goals.',
      details: ['Round-Up Savings', 'Expense Tracking & Budgeting', 'Goal-Based Saving'],
    },
    {
      title: 'Savify Split',
      summary: 'Split bills, track dues, and remind friends.',
      details: ['Shared bills', 'Track balances', 'Reminder system'],
    },
    {
      title: 'Savify Score',
      summary: 'Gamify your savings journey.',
      details: ['Points & streaks', 'Custom rewards', 'Challenges & badges'],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Features</Text>

        {features.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSummary}>{item.summary}</Text>
            {item.details.map((line, i) => (
              <Text key={i} style={styles.cardDetail}>• {line}</Text>
            ))}
          </View>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calculator')}
        >
          <Text style={styles.buttonText}>Try Savings Calculator</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 100,
  },
  pageTitle: {
    fontSize: 32,
    fontFamily: FONT_FAMILY.title,
    color: COLORS.textPrimary,
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
    fontFamily: FONT_FAMILY.subheading,
    color: COLORS.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  cardSummary: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.body,
    color: COLORS.textSecondary,
    marginBottom: 16,
  },
  cardDetail: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.body,
    color: '#9CA3AF',
    marginBottom: 6,
  },
  button: {
    backgroundColor: COLORS.textPrimary,
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 16,
    color: '#FFFFFF',
  },
});
