import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useLanguage } from '../context/LanguageContext';

const languageOrder = ['EN', 'FR', 'HI', 'TE', 'GU'];

export default function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();

  const cycleLanguage = () => {
    const nextIndex = (languageOrder.indexOf(language) + 1) % languageOrder.length;
    toggleLanguage(languageOrder[nextIndex]);
  };

  return (
    <TouchableOpacity
      onPress={cycleLanguage}
      style={tw`mt-6 px-4 py-2 bg-white rounded-full border border-gray-300`}
    >
      <Text style={tw`text-base text-gray-800 text-center`}>
        Language: {language}
      </Text>
    </TouchableOpacity>
  );
}
