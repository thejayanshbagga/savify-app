import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Home() {
  const navigation = useNavigation();
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const benefits = [
    {
      title: 'Streamline your financial management with Savify’s AI-driven tools.',
      text: 'From automated savings to machine learning-powered insights, we simplify your finances and help you stay on track effortlessly.',
      image: require('../assets/efficiency.png'),
    },
    {
      title: 'Experience the future of fintech with Savify.',
      text: 'Our advanced features, like expense tracking, gamified savings, and data-driven recommendations, ensure a smarter and more rewarding financial journey.',
      image: require('../assets/innovation.png'),
    },
    {
      title: 'Achieve your financial goals with Savify’s powerful tools.',
      text: 'Our advanced features, like expense tracking, gamified savings, and data-driven recommendations, ensure a smarter and more rewarding financial journey.',
      image: require('../assets/growth.png'),
    },
  ];

  const faqs = [
    {
      question: "Is my data safe with Savify?",
      answer: "Security is our top priority. We use bank-level encryption and follow strict privacy protocols to ensure your personal and financial information is fully protected. We never sell your data to third parties."
    },
    {
      question: "How does the Savify Round-Up feature work?",
      answer: "With every transaction, Savify rounds your purchase to the nearest dollar and invests the spare change into your personalized savings or investment fund. Based on your chosen risk profile—whether conservative, balanced, or aggressive—we allocate your savings accordingly. We’re also in talks with Canadian brokerage partners to offer real investment options in the near future."
    },
    {
      question: "When will Savify features be available?",
      answer: "We’re currently developing the backend and preparing for a full app release. Savify is expected to launch in early September 2025. Registered users will receive email updates as features are rolled out. Both web and mobile platforms will become available gradually."
    },
    {
      question: "Does Savify offer educational content for financial beginners?",
      answer: "Absolutely. Savify features beginner-friendly videos, mini-lessons, and interactive tools focused on budgeting, saving, and investing. We also curate high-quality resources from trusted platforms to help users strengthen their financial knowledge and grow their money smartly."
    },
    {
      question: "Do I need to connect my bank account to use Savify?",
      answer: "Not right away. You can manually upload your bank’s expense reports, and Savify will use its algorithm to analyze and categorize your spending. Direct bank integrations with major Canadian financial institutions will be introduced soon to simplify the process."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBenefitIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggle = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`bg-white flex-1`} contentContainerStyle={tw`pb-12`}>
        {/* Hero Section */}
        <View style={tw`items-center py-10 bg-blue-500 mt-6`}>
          <Text style={tw`text-white text-3xl font-bold mb-4 text-center`}>Welcome to Savify</Text>
          <Text style={tw`text-white text-lg text-center max-w-xs`}>
            Your smart savings companion.
          </Text>
        </View>

        {/* Auth Buttons */}
        <View style={tw`flex-row justify-around mt-8`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={tw`bg-green-500 py-3 px-6 rounded-full`}>
            <Text style={tw`text-white font-bold`}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={tw`bg-purple-500 py-3 px-6 rounded-full`}>
            <Text style={tw`text-white font-bold`}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* Benefits Rotator */}
        <View style={tw`mt-10 px-4`}>
          <Text style={tw`text-xl font-bold text-center text-blue-500 mb-2`}>
            {benefits[benefitIndex].title}
          </Text>
          <Text style={tw`text-center text-gray-700 mb-4 px-2`}>
            {benefits[benefitIndex].text}
          </Text>
          <Image
            source={benefits[benefitIndex].image}
            resizeMode="contain"
            style={{
              width: '90%',
              height: 200,
              alignSelf: 'center',
              borderRadius: 12,
              marginBottom: 20,
            }}
          />
        </View>

        {/* Calculator Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Calculator')}
          style={tw`mx-4 my-6 bg-blue-500 rounded-full py-3 px-4`}>
          <Text style={tw`text-white text-center font-bold text-base`}>
            Try the Savings Calculator
          </Text>
        </TouchableOpacity>

        {/* FAQ Section */}
        <View style={tw`mt-10 px-4`}>
          <Text style={tw`text-2xl font-bold text-center text-blue-600 mb-6`}>
            Frequently Asked Questions
          </Text>

          {faqs.map((item, index) => (
            <View key={index} style={tw`mb-4 border-b border-gray-300 pb-3`}>
              <TouchableOpacity onPress={() => toggle(index)}>
                <Text style={tw`text-lg font-bold text-gray-800`}>
                  {item.question}
                </Text>
              </TouchableOpacity>
              {activeIndex === index && (
                <Text style={tw`mt-2 text-gray-700`}>{item.answer}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
