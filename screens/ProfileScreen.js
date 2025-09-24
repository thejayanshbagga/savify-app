import React, { useState, useContext, useMemo } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import useTranslation from '../hooks/useTranslations';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/ProfileScreen.styles.js';

export default function ProfileScreen() {
  const tRaw = useTranslation();
  const navigation = useNavigation();
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const { signOut } = useContext(AuthContext);

  // Safe translator: works whether hook returns fn or object
  const tr = useMemo(() => {
    if (typeof tRaw === 'function') {
      return (k, fallback) => {
        try {
          const v = tRaw(k);
          return v == null ? fallback : v;
        } catch {
          return fallback;
        }
      };
    }
    return (k, fallback) => (tRaw && tRaw[k] != null ? tRaw[k] : fallback);
  }, [tRaw]);

  const handleLogout = async () => {
    try {
      if (!signOut) {
        throw new Error('Sign out is unavailable. Are you inside <AuthProvider>?');
      }

      await signOut();

      Alert.alert(
        tr('logoutSuccessTitle', 'Signed out'),
        tr('logoutSuccessMessage', 'You have been signed out successfully.')
      );

      // No manual navigation needed: App.js switches stacks on isAuthenticated=false
      // If you WANT to force it:
      // navigation.getParent()?.navigate('Landing');
    } catch (error) {
      Alert.alert(
        tr('logoutFailedTitle', 'Sign out failed'),
        error?.message || tr('logoutFailedMessage', 'Please try again.')
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Page Label */}
      <Text style={styles.pageLabel}>{tr('profileTitle', 'Profile')}</Text>

      {/* User Card */}
      <View style={styles.headerCard}>
        <Image
          source={{ uri: 'https://i.imgur.com/WxNkK1n.png' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Test Dummy</Text>
          <Text style={styles.handle}>@testdummy1</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsCard}>
        <OptionRow
          icon="person-outline"
          label={tr('myAccount', 'My Account')}
          subtext={tr('myAccountSubtext', 'Manage your account details')}
          warning
        />

        {/* Navigate to Settings stack */}
        <OptionRow
          icon="settings-outline"
          label={tr('settings', 'Settings')}
          subtext={tr('settingsSubtext', 'Manage your app preferences')}
          onPress={() => navigation.navigate('Settings')}
        />

        <SwitchRow
          icon="lock-closed-outline"
          label={tr('faceId', 'Face ID')}
          subtext={tr('faceIdSubtext', 'Use Face ID to unlock')}
          value={faceIdEnabled}
          onValueChange={setFaceIdEnabled}
        />

        <OptionRow
          icon="shield-checkmark-outline"
          label={tr('twoFA', 'Two‑Factor Auth')}
          subtext={tr('twoFASubtext', 'Add extra security')}
        />

        <OptionRow
          icon="log-out-outline"
          label={tr('logout', 'Log out')}
          subtext={tr('logoutSubtext', 'Sign out of your account')}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const OptionRow = ({ icon, label, subtext, warning = false, onPress }) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress}>
    <View style={styles.iconLabel}>
      <Ionicons name={icon} size={24} color="#555" />
      <View>
        <Text style={styles.optionText}>{label}</Text>
        {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
      </View>
    </View>
    {warning ? (
      <MaterialIcons name="error-outline" size={20} color="red" />
    ) : (
      <Ionicons name="chevron-forward-outline" size={20} color="#999" />
    )}
  </TouchableOpacity>
);

const SwitchRow = ({ icon, label, subtext, value, onValueChange }) => (
  <View style={styles.optionRow}>
    <View style={styles.iconLabel}>
      <Ionicons name={icon} size={24} color="#555" />
      <View>
        <Text style={styles.optionText}>{label}</Text>
        {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
      </View>
    </View>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);
