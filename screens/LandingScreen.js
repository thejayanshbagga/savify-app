import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import createStyles from '../styles/LandingScreen.styles';
import useTheme from '../hooks/useTheme';

const logoLight = require('../assets/logo-light.png');
const logoDark = require('../assets/logo-dark.png');

export default function LandingScreen() {
  const navigation = useNavigation();
  const { language } = useLanguage();
  const t = translations[language];
  const { palette, currentTheme } = useTheme();
  const styles = createStyles(palette);

  return (
    <View style={styles.container}>
      <Image
        source={currentTheme === 'dark' ? logoDark : logoLight}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.headline}>{t.headline}</Text>
      <Text style={styles.subheadline}>{t.subheadline}</Text>
      <Text style={styles.description}>{t.description}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>{t.getStarted}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>{t.signIn}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MainTabs')}
        style={styles.skipButton}>
        <Text style={styles.skipText}>{t.skip}</Text>
      </TouchableOpacity>
    </View>
  );
}