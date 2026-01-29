import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../styles/colors';
import { FONT_FAMILY } from '../styles/typography';

const screenWidth = Dimensions.get('window').width;

export default function CalculatorScreen() {
  const [initialDeposit, setInitialDeposit] = useState('100');
  const [contribution, setContribution] = useState('20');
  const [years, setYears] = useState('20');
  const [interestRate, setInterestRate] = useState('4');
  const [frequency, setFrequency] = useState('Weekly');
  const [chartData, setChartData] = useState(null);
  const [futureValue, setFutureValue] = useState(null);

  const calculate = () => {
    const P = parseFloat(initialDeposit);
    const PMT = parseFloat(contribution);
    const r = parseFloat(interestRate) / 100;
    const n = frequency === 'Weekly' ? 52 : 12;
    const t = parseInt(years);

    let balance = P;
    let data = [];

    for (let year = 1; year <= t; year++) {
      for (let i = 0; i < n; i++) {
        balance += PMT;
        balance *= 1 + r / n;
      }
      data.push(parseFloat(balance.toFixed(2)));
    }

    setChartData(data);
    setFutureValue(balance.toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Savings Calculator</Text>
        <Text style={styles.pageSubtitle}>Plan your financial future</Text>

        <View style={styles.card}>
          {[
            ['Initial Deposit', initialDeposit, setInitialDeposit],
            ['Recurring Contribution', contribution, setContribution],
            ['Years to Grow', years, setYears],
            ['Interest Rate (%)', interestRate, setInterestRate],
          ].map(([label, val, setVal], i) => (
            <View key={i} style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{label}</Text>
              <TextInput
                style={styles.input}
                value={val}
                onChangeText={setVal}
                keyboardType="numeric"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          ))}

          <Text style={styles.inputLabel}>Contribution Frequency</Text>
          <View style={styles.frequencyContainer}>
            {['Weekly', 'Monthly'].map((f) => (
              <TouchableOpacity
                key={f}
                onPress={() => setFrequency(f)}
                style={[
                  styles.frequencyButton,
                  frequency === f && styles.frequencyButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.frequencyText,
                    frequency === f && styles.frequencyTextActive,
                  ]}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>
        </View>

        {futureValue && (
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Estimated Balance</Text>
            <Text style={styles.resultValue}>
              ${parseFloat(futureValue).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        )}

        {chartData && (
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Growth Over Time</Text>
            <LineChart
              data={{
                labels: Array.from(
                  { length: Math.min(chartData.length, 10) },
                  (_, i) => (i === 0 ? '0' : `${Math.floor((i * chartData.length) / 10)}`)
                ),
                datasets: [{ data: chartData }],
              }}
              width={screenWidth - 80}
              height={220}
              yAxisLabel="$"
              chartConfig={{
                backgroundColor: COLORS.backgroundLight,
                backgroundGradientFrom: COLORS.backgroundLight,
                backgroundGradientTo: COLORS.backgroundLight,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                labelColor: (opacity = 1) => `rgba(107,114,128,${opacity})`,
                propsForDots: {
                  r: '4',
                  strokeWidth: '2',
                  stroke: '#000000',
                },
                propsForBackgroundLines: {
                  strokeDasharray: '',
                  stroke: '#F3F4F6',
                  strokeWidth: 1,
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  scrollView: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  pageTitle: {
    fontSize: 32,
    fontFamily: FONT_FAMILY.title,
    color: COLORS.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  pageSubtitle: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.body,
    color: COLORS.textSecondary,
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  inputGroup: { marginBottom: 20 },
  inputLabel: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    padding: 14,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundLight,
    fontSize: 16,
    fontFamily: FONT_FAMILY.body,
    color: COLORS.textPrimary,
  },
  frequencyContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    marginTop: 8,
  },
  frequencyButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundLight,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    alignItems: 'center',
  },
  frequencyButtonActive: {
    backgroundColor: COLORS.textPrimary,
    borderColor: COLORS.textPrimary,
  },
  frequencyText: {
    fontFamily: FONT_FAMILY.body,
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  frequencyTextActive: { color: '#FFFFFF' },
  calculateButton: {
    backgroundColor: COLORS.textPrimary,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  calculateButtonText: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 15,
    color: '#FFFFFF',
  },
  resultCard: {
    backgroundColor: '#FAFAFA',
    padding: 32,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: 'center',
  },
  resultLabel: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  resultValue: {
    fontFamily: FONT_FAMILY.title,
    fontSize: 48,
    color: COLORS.textPrimary,
    letterSpacing: -1,
  },
  chartCard: {
    backgroundColor: '#FAFAFA',
    padding: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  chartTitle: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: 20,
    letterSpacing: -0.3,
  },
  chart: { borderRadius: 8 },
});
