// App.js
import React, { useContext } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

const Stack = createStackNavigator();

function RootNavigator() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
      <Stack.Navigator key={isAuthenticated ? "auth" : "guest"} screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
            <>
              <Stack.Screen name="MainTabs" component={MainTabs} />
              <Stack.Screen name="Score" component={ScoreScreen} />
              <Stack.Screen name="Redeem" component={RedeemScreen} />
              <Stack.Screen name="Calculator" component={CalculatorScreen} />
              <Stack.Screen
                  name="PrivacyPolicy"
                  component={PrivacyPolicyScreen}
                  options={{  headerShown: true, title: 'Privacy Policy & Terms',}}
              />
            </>
        ) : (
            <>
              <Stack.Screen name="Landing" component={LandingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
              <Stack.Screen name="MainTabs" component={MainTabs} />
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
