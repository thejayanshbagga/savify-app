// screens/SettingsScreen.js
import React, {useMemo, useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTranslation from '../hooks/useTranslations';
import { useLanguage } from '../context/LanguageContext';
import createStyles, { createModalStyles } from '../styles/SettingsScreen.styles';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

import { useContext } from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeContext } from '../context/ThemeContext';

// safe translator to call tr('key', 'Fallback') whether the hook returns a fn or an object
const useSafeTranslator = () => {
  const tRaw = useTranslation();
  return useMemo(() => {
    if (typeof tRaw === 'function') return (k, f) => tRaw(k, f);
    return (k, f) => (tRaw && tRaw[k] != null ? tRaw[k] : f);
  }, [tRaw]);
};

// Row with chevron
const OptionRow = ({ icon, label, subtext, onPress, isLast, palette, styles }) => (
  <TouchableOpacity
    style={[styles.optionRow, isLast && styles.lastOptionRow]}
    onPress={onPress}
    activeOpacity={0.7}
    accessibilityRole="button"
  >
    <View style={styles.iconLabel}>
      <Ionicons name={icon} size={24} color={palette.textPrimary} />
      <View style={styles.textBlock}>
        <Text style={styles.optionText}>{label}</Text>
        {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
      </View>
    </View>
    <Ionicons name="chevron-forward-outline" size={20} color={palette.textPrimary} />
  </TouchableOpacity>
);

// Row with switch
const SwitchRow = ({
  icon,
  label,
  subtext,
  value,
  onValueChange,
  isLast,
  palette,
  styles,
}) => (
  <View
    style={[styles.optionRow, isLast && styles.lastOptionRow]}
    accessible
    accessibilityRole="switch"
  >
    <View style={styles.iconLabel}>
      <Ionicons name={icon} size={24} color={palette.textPrimary} />
      <View style={styles.textBlock}>
        <Text style={styles.optionText}>{label}</Text>
        {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
      </View>
    </View>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

// keep this in sync with wherever your app defines supported languages
const LANGUAGES = [
  { label: 'English', value: 'EN' },
  { label: 'Français', value: 'FR' },
  { label: 'हिन्दी', value: 'HI' },
  { label: 'తెలుగు', value: 'TE' },
  { label: 'ગુજરાતી', value: 'GU' },
];

export default function SettingsScreen() {
  const tr = useSafeTranslator();
  const navigation = useNavigation();
  const { language, toggleLanguage } = useLanguage();

  const { palette } = useTheme();
  const styles = createStyles(palette);
  const modalStyles = createModalStyles(palette);

  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);

  const {setTheme, currentTheme } = useContext(ThemeContext);

  const darkModeEnabled = currentTheme === "dark"; // convert theme to boolean for the switch to dark mode


  const currentLanguageLabel = LANGUAGES.find(lang => lang.value === language)?.label || tr('selectLanguage', 'Select Language');

    // handlers
    const handleEditProfile = () =>
        Alert.alert(tr('editProfile', 'Edit Profile'), tr('editProfileSubtext', 'Navigation to edit profile screen.'));
    const handleChangePassword = () => 
        navigation.navigate('ChangePassword');
    const handleChangeEmail = () => 
        navigation.navigate('ChangeEmail');
    const handleManageDevices = () =>
        Alert.alert(tr('manageDevices', 'Manage Devices'), tr('manageDevicesSubtext', 'Navigation to manage devices screen.'));
    const handleTwoFA = () =>
        Alert.alert(tr('twoFA', 'Two-Factor Authentication'), tr('twoFASubtext', 'Navigation to 2FA settings screen.'));
    const handleLanguage = () =>
        Alert.alert(tr('language', 'Language'), tr('languageSubtext', 'Show language selection modal or page.'));
    const handleHelpSupport = () =>
        Alert.alert(tr('helpSupport', 'Help & Support'), tr('helpSupportSubtext', 'Navigation to help & support page.'));
    const handleTermsAndPrivacy = () =>
        Alert.alert(tr('termsAndPrivacy', 'Terms & Privacy Policy'), tr('termsAndPrivacySubtext', 'Open web browser to terms.'));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-5`}>
        <Text style={{ color: palette.textPrimary }}>&larr; Back</Text>
      </TouchableOpacity>
      <Text style={styles.pageLabel}>{tr('settingsTitle', 'Settings')}</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Account & Profile */}
        <Text style={styles.sectionHeader}>{tr('accountAndProfile', 'Account & Profile')}</Text>
        <View style={styles.optionsCard}>
          <OptionRow
            icon="person-outline"
            label={tr('editProfile', 'Edit Profile')}
            subtext={tr('editProfileSubtext', 'Update your personal information')}
            onPress={handleEditProfile}
            palette={palette}
            styles={styles}
          />
          <OptionRow
            icon="key-outline"
            label={tr('changePassword', 'Change Password')}
            subtext={tr('changePasswordSubtext', 'Update your password')}
            onPress={handleChangePassword}
            palette={palette}
            styles={styles}
          />
          <OptionRow
            icon="mail-outline"
            label={tr('changeEmail', 'Change Email')}
            subtext={tr('changeEmailSubtext', 'Update the email on your account')}
            onPress={handleChangeEmail}
            palette={palette}
            styles={styles}
            isLast
          />
        </View>

        <View style={styles.sectionSpacer} />

        {/* Privacy & Security */}
        <Text style={styles.sectionHeader}>{tr('privacyAndSecurity', 'Privacy & Security')}</Text>
        <View style={styles.optionsCard}>
          <OptionRow
            icon="phone-portrait-outline"
            label={tr('manageDevices', 'Manage Devices')}
            subtext={tr('manageDevicesSubtext', 'View and sign out from connected devices')}
            onPress={handleManageDevices}
            palette={palette}
            styles={styles}
          />
          <OptionRow
            icon="shield-checkmark-outline"
            label={tr('twoFA', 'Two-Factor Authentication')}
            subtext={tr('twoFASubtext', 'Enable or disable 2FA')}
            onPress={handleTwoFA}
            palette={palette}
            styles={styles}
            isLast
          />
        </View>

        <View style={styles.sectionSpacer} />

        {/* General */}
        <Text style={styles.sectionHeader}>{tr('generalSettings', 'General')}</Text>
        <View style={styles.optionsCard}>
          <SwitchRow
            icon="notifications-outline"
            label={tr('notifications', 'Push Notifications')}
            subtext={tr('notificationsSubtext', 'Control what you are notified about')}
            value={pushNotificationsEnabled}
            onValueChange={setPushNotificationsEnabled}
            palette={palette}
            styles={styles}
          />

          {/* Language row opens modal */}
          <OptionRow
            icon="globe-outline"
            label={tr('language', 'Language')}
            subtext={currentLanguageLabel}
            onPress={() => setLanguageModalVisible(true)}
            palette={palette}
            styles={styles}
          />

          <SwitchRow
            icon="moon-outline"
            label={tr('darkMode', 'Dark Mode')}
            subtext={tr('darkModeSubtext', 'Switch to a dark theme')}
            value={darkModeEnabled}
            onValueChange={(value) => {
              setTheme(value ? "dark" : "light");
            }}
            palette={palette}
            styles={styles}
            isLast
          />
        </View>

        <View style={styles.sectionSpacer} />

        {/* Support & Information */}
        <Text style={styles.sectionHeader}>{tr('supportAndInfo', 'Support & Information')}</Text>
        <View style={styles.optionsCard}>
          <OptionRow
            icon="help-circle-outline"
            label={tr('helpSupport', 'Help & Support')}
            subtext={tr('helpSupportSubtext', 'Get assistance or report an issue')}
            onPress={() =>
              Alert.alert(tr('helpSupport', 'Help & Support'), tr('helpSupportSubtext', 'Navigation to help & support page.'))
            }
            palette={palette}
            styles={styles}
          />
          <OptionRow
            icon="document-text-outline"
            label={tr('termsAndPrivacy', 'Terms & Privacy Policy')}
            subtext={tr('termsAndPrivacySubtext', 'Read legal documents')}
            onPress={() => navigation.navigate('PrivacyPolicy')}
            isLast
            palette={palette}
            styles={styles}
          />
        </View>

        <View style={styles.pageBottomSpacer} />
      </ScrollView>

      {/* Language modal */}
      <Modal
        animationType="fade"
        transparent
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <TouchableOpacity style={modalStyles.backdrop} activeOpacity={1} onPress={() => setLanguageModalVisible(false)}>
          <View style={modalStyles.sheet}>
            <Text style={modalStyles.sheetTitle}>{tr('chooseLanguage', 'Choose language')}</Text>
            <FlatList
              data={LANGUAGES}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={modalStyles.option}
                  onPress={() => {
                    toggleLanguage(item.value);
                    setLanguageModalVisible(false);
                  }}
                >
                  <Text style={modalStyles.optionText}>{item.label}</Text>
                  {language === item.value ? (
                    <Ionicons name="checkmark-circle" size={20} />
                  ) : (
                    <Ionicons name="ellipse-outline" size={20} />
                  )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={modalStyles.separator} />}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
