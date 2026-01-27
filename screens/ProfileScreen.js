import React, { useState, useContext, useMemo } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import useTranslation from '../hooks/useTranslations';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import createStyles from '../styles/ProfileScreen.styles';
import useTheme from '../hooks/useTheme';

export default function ProfileScreen() {
  const tRaw = useTranslation();
  const navigation = useNavigation();
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const { signOut } = useContext(AuthContext);
  const { palette } = useTheme();
  const styles = createStyles(palette);


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
      await signOut();

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Landing' }],
        })
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
          <Text style={styles.name}>Jayansh Bagga</Text>
          <Text style={styles.handle}>@jbagga3</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsCard}>
        <OptionRow
          icon="person-outline"
          label={tr('myAccount', 'My Account')}
          subtext={tr('myAccountSubtext', 'Manage your account details')}
          warning
          styles={styles}
          palette={palette}
        />

        {/* Navigate to Settings stack */}
        <OptionRow
          icon="settings-outline"
          label={tr('settings', 'Settings')}
          subtext={tr('settingsSubtext', 'Manage your app preferences')}
          onPress={() => navigation.navigate('Settings')}
          styles={styles}
          palette={palette}
        />

        <SwitchRow
          icon="lock-closed-outline"
          label={tr('faceId', 'Face ID')}
          subtext={tr('faceIdSubtext', 'Use Face ID to unlock')}
          value={faceIdEnabled}
          onValueChange={setFaceIdEnabled}
          styles={styles}
          palette={palette}
        />

        <OptionRow
          icon="shield-checkmark-outline"
          label={tr('twoFA', 'Two‑Factor Auth')}
          subtext={tr('twoFASubtext', 'Add extra security')}
          styles={styles}
          palette={palette}
        />

        <OptionRow
          icon="log-out-outline"
          label={tr('logout', 'Log out')}
          subtext={tr('logoutSubtext', 'Sign out of your account')}
          onPress={handleLogout}
          styles={styles}
          palette={palette}
        />
      </View>
    </View>
  );
}

const OptionRow = ({
  icon,
  label,
  subtext,
  warning = false,
  onPress,
  styles,
  palette,
}) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress}>
    <View style={styles.iconLabel}>
      <Ionicons name={icon} size={24} color={palette.textSecondary} />
      <View>
        <Text style={styles.optionText}>{label}</Text>
        {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
      </View>
    </View>
    {warning ? (
      <MaterialIcons name="error-outline" size={20} color={palette.error} />
    ) : (
      <Ionicons
        name="chevron-forward-outline"
        size={20}
        color={palette.textSecondary}
      />
    )}
  </TouchableOpacity>
);


const SwitchRow = ({
  icon,
  label,
  subtext,
  value,
  onValueChange,
  styles,
  palette,
}) => (
  <View style={styles.optionRow}>
    <View style={styles.iconLabel}>
      <Ionicons name={icon} size={24} color={palette.textSecondary} />
      <View>
        <Text style={styles.optionText}>{label}</Text>
        {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
      </View>
    </View>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

