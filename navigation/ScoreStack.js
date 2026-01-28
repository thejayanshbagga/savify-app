import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScoreScreen from '../screens/ScoreScreen';
import RedeemScreen from '../screens/RedeemScreen';

const Stack = createStackNavigator();

export default function ScoreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScoreHome" component={ScoreScreen} />
      <Stack.Screen name="Redeem" component={RedeemScreen} />
    </Stack.Navigator>
  );
}
