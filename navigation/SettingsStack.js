import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../screens/SettingsScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ChangeEmailScreen from '../screens/ChangeEmailScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen 
        name="SettingsHome" 
        component={SettingsScreen}
        options={{
          gestureEnabled: false, // Disable swipe on settings home
        }}
      />
      <Stack.Screen 
        name="ChangePassword" 
        component={ChangePasswordScreen}
        options={{ 
          title: 'Change Password',
          gestureEnabled: true,
        }}
      />
      <Stack.Screen 
        name="ChangeEmail" 
        component={ChangeEmailScreen}
        options={{ 
          title: 'Change Email',
          gestureEnabled: true,
        }}
      />
      <Stack.Screen 
        name="PrivacyPolicy" 
        component={PrivacyPolicyScreen}
        options={{ 
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}
