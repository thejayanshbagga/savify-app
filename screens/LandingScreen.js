import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

export default function LandingScreen() {
  const navigation = useNavigation();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <View style={tw`flex-1 bg-[#5C8EDC] justify-center items-center px-6`}>
      <Image
        source={require('../assets/logo-savify-no-background.png')}
        style={tw`w-24 h-24 mb-6`}
        resizeMode="contain"
      />
      <Text style={tw`text-white text-3xl font-bold text-center mb-2`}>
        {t.headline}
      </Text>
      <Text style={tw`text-white text-2xl font-semibold text-center mb-4`}>
        {t.subheadline}
      </Text>
      <Text style={tw`text-white text-center mb-8 text-base`}>
        {t.description}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={tw`bg-white px-8 py-3 rounded-full mb-4`}>
        <Text style={tw`text-primary font-bold text-base`}>{t.getStarted}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={tw`border border-white px-8 py-3 rounded-full`}>
        <Text style={tw`text-white font-bold text-base`}>{t.signIn}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MainTabs')}
        style={tw`mt-4`}>
        <Text style={tw`text-white underline text-base`}>{t.skip}</Text>
      </TouchableOpacity>

      <View style={tw`mt-6`}>
        <LanguageSelector />
      </View>
    </View>
  );
}
