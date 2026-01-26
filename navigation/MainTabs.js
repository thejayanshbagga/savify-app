// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import SaveScreen from '../screens/SaveScreen';
import SplitScreen from '../screens/SplitFriendsScreen';
import ScoreScreen from '../screens/ScoreScreen';
import InvestmentDashboard from '../screens/InvestmentDashboard';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsStack from '../navigation/SettingsStack';
import useTranslation from '../hooks/useTranslations';

const Tab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();
const SaveStack = createNativeStackNavigator();

function SaveStackScreen() {
  return (
    <SaveStack.Navigator 
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 300,
      }}
    >
      <SaveStack.Screen 
        name="SaveHome" 
        component={SaveScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <SaveStack.Screen 
        name="InvestmentDashboard" 
        component={InvestmentDashboard}
        options={{
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      />
    </SaveStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator 
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 300,
      }}
    >
      <ProfileStack.Screen 
        name="ProfileHome" 
        component={ProfileScreen}
        options={{ 
          gestureEnabled: false,
        }}
      />
      <ProfileStack.Screen 
        name="Settings" 
        component={SettingsStack}
        options={{ 
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      />
    </ProfileStack.Navigator>
  );
}

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
        tabBarActiveTintColor: '#4A6FA5',
        tabBarInactiveTintColor: '#8894A6',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#D8DEE9',
          borderTopWidth: 1,
        },
      })}
    >
      <Tab.Screen 
        name="Save" 
        component={SaveStackScreen} 
        options={{ tabBarLabel: t.saveTab || 'Save' }} 
      />
      <Tab.Screen 
        name="Split" 
        component={SplitScreen} 
        options={{ tabBarLabel: t.splitTab || 'Split' }} 
      />
      <Tab.Screen 
        name="Score" 
        component={ScoreScreen} 
        options={{ tabBarLabel: t.scoreTab || 'Score' }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStackScreen} 
        options={{ tabBarLabel: t.profileTab || 'Profile' }} 
      />
    </Tab.Navigator>
  );
}