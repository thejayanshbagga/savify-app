import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

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
    <SafeAreaView style={tw`flex-1 bg-[#5C8EDC]`}>
      <ScrollView style={tw`px-6 pt-12`} contentContainerStyle={tw`pb-24`}>
        <Text style={tw`text-2xl font-bold text-primary text-center mb-6`}>
          Savings Growth Calculator
        </Text>

        <View style={tw`bg-white rounded-xl p-6 mb-10 shadow-sm`}>
          {[
            ['Initial Deposit', initialDeposit, setInitialDeposit],
            ['Recurring Contribution', contribution, setContribution],
            ['Years to Grow', years, setYears],
            ['Interest Rate (%)', interestRate, setInterestRate],
          ].map(([label, val, setVal], i) => (
            <View key={i} style={tw`mb-4`}>
              <Text style={tw`text-gray-800 font-semibold mb-1`}>{label}</Text>
              <TextInput
                style={tw`border border-gray-300 p-3 rounded-lg bg-gray-50`}
                value={val}
                onChangeText={setVal}
                keyboardType="numeric"
              />
            </View>
          ))}

          <Text style={tw`text-gray-800 font-semibold mb-2`}>Contribution Frequency</Text>
          <View style={tw`flex-row justify-around mb-4`}>
            {['Weekly', 'Monthly'].map((f) => (
              <TouchableOpacity key={f} onPress={() => setFrequency(f)}>
                <Text style={tw`${frequency === f ? 'text-primary font-bold' : 'text-gray-700'}`}>
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={tw`bg-primary py-3 rounded-full mt-2`} onPress={calculate}>
            <Text style={tw`text-white text-center font-bold`}>Calculate</Text>
          </TouchableOpacity>
        </View>

        {futureValue && (
          <View style={tw`bg-white p-5 rounded-xl mt-4 mb-6 shadow-sm items-center`}>
            <Text style={tw`text-primary text-xl font-semibold mb-2`}>
              Your Estimated Balance
            </Text>
            <Text style={tw`text-dark text-3xl font-bold`}>
              ${parseFloat(futureValue).toLocaleString()}
            </Text>
          </View>
        )}

        {chartData && (
  <View style={tw`bg-white p-5 rounded-xl mb-10 shadow-sm`}>
    <Text style={tw`text-primary text-lg font-bold text-center mb-3`}>
      Growth Over Time
    </Text>

    <View style={tw`border-t border-gray-200 mt-4 pt-4`}>
      <LineChart
        data={{
          labels: Array.from({ length: chartData.length }, (_, i) => `${i + 1}`),
          datasets: [{ data: chartData }],
        }}
        width={screenWidth - 48}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
          labelColor: () => '#243B55',
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#4A90E2',
          },
        }}
        style={tw`border rounded`}
      />
    </View>
  </View> 
)}           
      </ScrollView>
    </SafeAreaView>
  );
}
