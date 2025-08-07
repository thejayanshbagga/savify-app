import React, { use } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SaveScreen from '../screens/SaveScreen';
import SplitScreen from '../screens/SplitFriendsScreen';
import ScoreScreen from '../screens/ScoreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import useTranslation from '../hooks/useTranslations';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const t = useTranslation();
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
      <Tab.Screen name="Save" component={SaveScreen} options={{ tabBarLabel: t.saveTab }} />
      <Tab.Screen name="Split" component={SplitScreen} options={{ tabBarLabel: t.splitTab }} />
      <Tab.Screen name="Score" component={ScoreScreen} options={{ tabBarLabel: t.scoreTab }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: t.profileTab }} />
    </Tab.Navigator>
  );
}
