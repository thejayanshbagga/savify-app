import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SaveScreen from '../screens/SaveScreen';
import SplitScreen from '../screens/SplitScreen';
import ScoreScreen from '../screens/ScoreScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Save') iconName = 'wallet';
          else if (route.name === 'Split') iconName = 'pie-chart';
          else if (route.name === 'Score') iconName = 'stats-chart';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Save" component={SaveScreen} />
      <Tab.Screen name="Split" component={SplitScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
