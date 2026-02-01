// App.js
import React, { useContext, useState, useEffect } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { LanguageProvider } from './context/LanguageContext';
import AuthProvider, { AuthContext } from './context/AuthContext';

import LandingScreen from './screens/LandingScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import MainTabs from './navigation/MainTabs';
import ScoreScreen from './screens/ScoreScreen';
import RedeemScreen from './screens/RedeemScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import { Asset } from 'expo-asset';

import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

function RootNavigator() {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const { currentTheme } = useContext(ThemeContext);

  if (loading) return null;

  return (
    <Stack.Navigator
      key={isAuthenticated ? "auth" : "guest"}
      screenOptions={{
        headerStyle: {
          backgroundColor: currentTheme === "dark" ? "#162447" : "#FFFFFF",
        },
        headerTintColor: currentTheme === "dark" ? "#FFFFFF" : "#000000",
      }}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ headerShown: true, title: 'Privacy Policy & Terms'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}

function ThemedNavigation() {
  const { currentTheme } = useContext(ThemeContext);
  const navTheme = currentTheme === "dark" ? DarkTheme : DefaultTheme;

  return (
      <NavigationContainer theme={navTheme}>
        <RootNavigator />
      </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'HostGrotesk-ExtraBold': require('./assets/fonts/HostGrotesk-ExtraBold.ttf'),
          'HostGrotesk-Medium': require('./assets/fonts/HostGrotesk-Medium.ttf'),
          'HostGrotesk-Regular': require('./assets/fonts/HostGrotesk-Regular.ttf'),
        });

        await Asset.loadAsync([
          require('./assets/logo-light.png'),
          require('./assets/logo-dark.png'),
        ]);
        
        setFontsLoaded(true);
      } catch (e) {
        console.warn('Error loading fonts:', e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <ThemedNavigation />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
  );
}