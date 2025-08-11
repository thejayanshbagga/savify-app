import React, { useMemo, useState } from 'react';
import {View, Text, Switch, TouchableOpacity, ScrollView, Alert,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTranslation from '../hooks/useTranslations';
import styles from '../styles/SettingsScreen.styles';
import { useNavigation } from '@react-navigation/native';

// safe translator to call tr('key', 'Fallback') whether the hook returns a fn or an object
const useSafeTranslator = () => {
    const tRaw = useTranslation();
    return useMemo(() => {
        if (typeof tRaw === 'function') return (k, f) => tRaw(k, f);
        return (k, f) => (tRaw && tRaw[k] != null ? tRaw[k] : f);
    }, [tRaw]);
};

// Row with chevron
const OptionRow = ({ icon, label, subtext, onPress, isLast }) => (
    <TouchableOpacity
        style={[styles.optionRow, isLast && styles.lastOptionRow]}
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityRole="button"
    >
        <View style={styles.iconLabel}>
            <Ionicons name={icon} size={24} color="#555" />
            <View style={styles.textBlock}>
                <Text style={styles.optionText}>{label}</Text>
                {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
            </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color="#999" />
    </TouchableOpacity>
);

// Row with switch
const SwitchRow = ({ icon, label, subtext, value, onValueChange, isLast }) => (
    <View
        style={[styles.optionRow, isLast && styles.lastOptionRow]}
        accessible
        accessibilityRole="switch"
    >
        <View style={styles.iconLabel}>
            <Ionicons name={icon} size={24} color="#555" />
            <View style={styles.textBlock}>
                <Text style={styles.optionText}>{label}</Text>
                {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
            </View>
        </View>
        <Switch value={value} onValueChange={onValueChange} />
    </View>
);

export default function SettingsScreen() {
    const tr = useSafeTranslator();
    const navigation = useNavigation();

    // switch state
    const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

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
            <Text style={styles.pageLabel}>{tr('settingsTitle', 'Settings')}</Text>

            <ScrollView contentContainerStyle={{ paddingBottom: 8 }}>
                {/* Account & Profile */}
                <Text style={styles.sectionHeader}>{tr('accountAndProfile', 'Account & Profile')}</Text>
                <View style={styles.optionsCard}>
                    <OptionRow
                        icon="person-outline"
                        label={tr('editProfile', 'Edit Profile')}
                        subtext={tr('editProfileSubtext', 'Update your personal information')}
                        onPress={handleEditProfile}
                    />
                    <OptionRow
                        icon="key-outline"
                        label={tr('changePassword', 'Change Password')}
                        subtext={tr('changePasswordSubtext', 'Update your password')}
                        onPress={handleChangePassword}
                    />
                    <OptionRow
                        icon="mail-outline"
                        label={tr('changeEmail', 'Change Email')}
                        subtext={tr('changeEmailSubtext', 'Update the email on your account')}
                        onPress={handleChangeEmail}
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
                    />
                    <OptionRow
                        icon="shield-checkmark-outline"
                        label={tr('twoFA', 'Two-Factor Authentication')}
                        subtext={tr('twoFASubtext', 'Enable or disable 2FA')}
                        onPress={handleTwoFA}
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
                    />
                    <OptionRow
                        icon="globe-outline"
                        label={tr('language', 'Language')}
                        subtext={tr('languageSubtext', 'Change app display language')}
                        onPress={handleLanguage}
                    />
                    <SwitchRow
                        icon="moon-outline"
                        label={tr('darkMode', 'Dark Mode')}
                        subtext={tr('darkModeSubtext', 'Switch to a dark theme')}
                        value={darkModeEnabled}
                        onValueChange={setDarkModeEnabled}
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
                        onPress={handleHelpSupport}
                    />
                    <OptionRow
                        icon="document-text-outline"
                        label={tr('termsAndPrivacy', 'Terms & Privacy Policy')}
                        subtext={tr('termsAndPrivacySubtext', 'Read legal documents')}
                        onPress={handleTermsAndPrivacy}
                        isLast
                    />
                </View>

                <View style={{ height: 8 }} />
            </ScrollView>
        </View>
    );
}
