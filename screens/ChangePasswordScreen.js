import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../styles/ChangePassword.styles';
import useTheme from '../hooks/useTheme'
import useTranslation from '../hooks/useTranslations';
import tw from 'twrnc';

const useSafeTranslator = () => {
  const tRaw = useTranslation();
  return (k, f) =>
    typeof tRaw === 'function'
      ? tRaw(k, f)
      : tRaw && tRaw[k] != null
      ? tRaw[k]
      : f;
};

export default function ChangePasswordScreen() {
  const navigation = useNavigation();
  const tr = useSafeTranslator();
  const { palette } = useTheme();
  const styles = createStyles(palette);


  // Put the Redeem-style back button in the header so there's only one
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
        headerTitle: '',
        headerStyle: {
          backgroundColor: palette.background,
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTransparent: false,
      });
  }, [navigation, tr]);

  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState({ old: false, next: false, confirm: false });

  const validate = () => {
    if (!oldPw || !newPw || !confirmPw) {
      Alert.alert(tr('missingInfoPw', 'Missing info'), tr('missingInfoPwMsg', 'Please fill out all fields.'));
      return false;
    }
    if (newPw.length < 8) {
      Alert.alert(tr('weakPassword', 'Weak password'), tr('weakPasswordMsg', 'New password must be at least 8 characters.'));
      return false;
    }
    if (newPw !== confirmPw) {
      Alert.alert(tr('passwordMismatch', 'Mismatch'), tr('passwordMismatchMsg', 'Passwords do not match.'));
      return false;
    }
    if (newPw === oldPw) {
      Alert.alert(tr('noPasswordChange', 'No change'), tr('noPasswordChangeMsg', 'New password must be different from the old password.'));
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      await new Promise(r => setTimeout(r, 600)); // fake latency
      Alert.alert(tr('passwordSuccess', 'Success'), tr('passwordSuccessMsg', 'Your password has been updated.'));
      setOldPw('');
      setNewPw('');
      setConfirmPw('');
    } catch (err) {
      Alert.alert(tr('changePasswordErrorTitle', 'Error'), err?.message || tr('changePasswordErrorMsg', 'Failed to change password. Try again.'));
    } finally {
      setLoading(false);
    }
  };

  const Eye = ({ which }) => (
    <TouchableOpacity
      onPress={() => setShow(s => ({ ...s, [which]: !s[which] }))}
      style={styles.eye}
      accessibilityRole="button"
      accessibilityLabel={tr('togglePasswordVisibility', 'Toggle password visibility')}
    >
      <Ionicons name={show[which] ? 'eye-off-outline' : 'eye-outline'} size={20} color={palette.textPrimary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 16 }}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      {/* no inline back button here anymore */}
      <Text style={styles.title}>{tr('changePasswordTitle', 'Change Password')}</Text>

      <View style={styles.field}>
        <Text style={styles.label}>{tr('currentPasswordShort', 'Current password')}</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={oldPw}
            onChangeText={setOldPw}
            secureTextEntry={!show.old}
            placeholder={tr('currentPasswordPlaceholder2', 'Enter current password')}
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />
          <Eye which="old" />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>{tr('newPasswordLabel', 'New password')}</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={newPw}
            onChangeText={setNewPw}
            secureTextEntry={!show.next}
            placeholder={tr('newPasswordPlaceholder', 'Enter new password')}
            style={styles.input}
            autoCapitalize="none"
          />
          <Eye which="next" />
        </View>
        <Text style={styles.hint}>{tr('passwordHint', 'Use 8+ characters. Mix letters, numbers, symbols.')}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>{tr('confirmNewPasswordLabel', 'Confirm new password')}</Text>
        <View style={styles.inputWrap}>
          <TextInput
            value={confirmPw}
            onChangeText={setConfirmPw}
            secureTextEntry={!show.confirm}
            placeholder={tr('confirmPasswordPlaceholder', 'Re-enter new password')}
            style={styles.input}
            autoCapitalize="none"
          />
          <Eye which="confirm" />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={onSubmit}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {loading ? tr('updatePasswordLoading', 'Saving…') : tr('updatePasswordButton', 'Update Password')}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
