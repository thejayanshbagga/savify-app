import React, { createContext, useState, useContext, useEffect } from 'react';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const initLanguage = async () => {
      // Check stored language first
      const storedLang = await AsyncStorage.getItem('preferredLanguage');
      if (storedLang && translations[storedLang]) {
        setLanguage(storedLang);
      } else {
        // Auto-detect from device locale
        const locale = Localization.locale.split('-')[0].toUpperCase();
        const deviceLang = translations[locale] ? locale : 'EN';
        setLanguage(deviceLang);

        console.log("Detected language:", Localization.locale);
      }
    };

    initLanguage();
  }, []);

  const toggleLanguage = async (newLang) => {
    setLanguage(newLang);
    await AsyncStorage.setItem('preferredLanguage', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
