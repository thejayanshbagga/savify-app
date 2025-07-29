// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import useTranslation from '../hooks/useTranslations';
// import { supabase } from '../lib/supabase'; // Uncomment if using Supabase

export default function ProfileScreen() {
  const t = useTranslation();
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  const handleLogout = async () => {
    // If using Supabase:
    // const { error } = await supabase.auth.signOut();
    // if (error) Alert.alert('Logout Failed', error.message);
    // else Alert.alert('Signed out');

    // Placeholder logout:
    Alert.alert('Logged out', 'You have been signed out successfully.');
  };

  return (
    <View style={styles.container}>
      {/* Page Label */}
      <Text style={styles.pageLabel}>{t.profileTitle}</Text>

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
        <OptionRow icon="person-outline" label={t.myAccount} subtext={t.myAccountSubtext} warning />
        <OptionRow icon="settings-outline" label={t.settings} subtext={t.logoutSubtext} onPress={handleLogout} />
        <SwitchRow
          icon="lock-closed-outline"
          label={t.faceId}
          subtext={t.faceIdSubtext}
          value={faceIdEnabled}
          onValueChange={setFaceIdEnabled}
        />
        <OptionRow icon="shield-checkmark-outline" label={t.twoFA} subtext={t.twoFASubtext} />
        <OptionRow icon="log-out-outline" label={t.logout} subtext={t.logoutSubtext} onPress={handleLogout} />
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
        {subtext && <Text style={styles.subtext}>{subtext}</Text>}
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
        {subtext && <Text style={styles.subtext}>{subtext}</Text>}
      </View>
    </View>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E3FF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  pageLabel: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#243B55',
  },
  headerCard: {
    backgroundColor: '#001AFF',
    padding: 20,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    backgroundColor: '#ccc',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  handle: {
    color: '#d0d0ff',
    fontSize: 14,
  },
  optionsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  subtext: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
});
