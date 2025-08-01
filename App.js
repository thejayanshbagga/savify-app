import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/LandingScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import MainTabs from './navigation/MainTabs';

// navigation from score screen to redeem page
import ScoreScreen from './screens/ScoreScreen';
import RedeemScreen from './screens/RedeemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainTabs} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
        <Stack.Screen name="Redeem" component={RedeemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
