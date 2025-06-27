import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';


const screenWidth = Dimensions.get('window').width;

export default function Calculator() {
  const [initialDeposit, setInitialDeposit] = useState('100');
  const [contribution, setContribution] = useState('20');
  const [frequency, setFrequency] = useState('Weekly');
  const [years, setYears] = useState('20');
  const [interestRate, setInterestRate] = useState('4');
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
      for (let period = 1; period <= n; period++) {
        balance += PMT;
        balance *= 1 + r / n;
      }
      data.push(parseFloat(balance.toFixed(2)));
    }

    setChartData(data);
    setFutureValue(data[data.length - 1]);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
    <ScrollView style={tw`flex-1 bg-white px-4 pt-14`}>
      <Text style={tw`text-xl font-bold text-blue-500 mb-6 text-center`}>
        Savings Growth Calculator
      </Text>

      {/* Inputs */}
      {[
        { label: 'Initial Deposit', value: initialDeposit, setter: setInitialDeposit },
        { label: 'Recurring Contribution', value: contribution, setter: setContribution },
        { label: 'Years to Grow', value: years, setter: setYears },
        { label: 'Interest Rate (%)', value: interestRate, setter: setInterestRate },
      ].map((field, idx) => (
        <View key={idx} style={tw`mb-4`}>
          <Text style={tw`font-bold text-gray-700 mb-1`}>{field.label}</Text>
          <TextInput
            style={tw`border border-gray-300 rounded px-3 py-2`}
            keyboardType="numeric"
            value={field.value}
            onChangeText={field.setter}
          />
        </View>
      ))}

      {/* Frequency Radio */}
      <Text style={tw`font-bold text-gray-700 mb-2`}>Contribution Frequency</Text>
      <View style={tw`flex-row gap-4 mb-4`}>
        {['Weekly', 'Monthly'].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={tw`flex-row items-center`}
            onPress={() => setFrequency(opt)}
          >
            <View
              style={tw`w-5 h-5 rounded-full border border-blue-500 mr-2 ${
                frequency === opt ? 'bg-blue-500' : ''
              }`}
            />
            <Text style={tw`text-gray-700`}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calculate Button */}
      <TouchableOpacity onPress={calculate} style={tw`bg-blue-500 py-3 rounded mb-6`}>
        <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
      </TouchableOpacity>

      {/* Result */}
      {futureValue && (
        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-bold text-center text-green-600`}>
            Estimated Future Value: ${futureValue.toFixed(2)}
          </Text>
        </View>
      )}

      {/* Chart */}
      {chartData && (
        <LineChart
          data={{
            labels: Array.from({ length: chartData.length }, (_, i) => `${i + 1}`),
            datasets: [{ data: chartData }],
          }}
          width={screenWidth - 32}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            labelColor: () => '#243B55',
          }}
          style={tw`border rounded mb-10`}
        />
      )}
    </ScrollView>
    </SafeAreaView>
  );
}
