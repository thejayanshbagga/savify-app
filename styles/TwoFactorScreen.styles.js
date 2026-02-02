// styles/TwoFactorScreen.styles.js
import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    },

    // Icon
    iconWrapper: {
      width: 64,
      height: 64,
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.accent + '15',
      marginBottom: 24,
    },

    // Text
    title: {
      fontSize: 32,
      fontFamily: FONT_FAMILY.title,
      color: palette.textPrimary,
      textAlign: 'center',
      letterSpacing: -0.5,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
    },

    // OTP grid
    otpRow: {
      flexDirection: 'row',
      gap: 10,
      position: 'relative',
    },
    otpCell: {
      width: 46,
      height: 58,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: palette.border,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.card,
    },
    otpCellFocused: {
      borderColor: palette.accent,
      shadowColor: palette.accent,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
      shadowOpacity: 0.4,
    },
    otpCellFilled: {
      borderColor: palette.textSecondary,
    },
    otpCellError: {
      borderColor: palette.error || '#e74c3c',
    },
    otpDigit: {
      fontSize: 24,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
    },
    cursor: {
      position: 'absolute',
      bottom: 6,
      width: 20,
      height: 2,
      borderRadius: 1,
      backgroundColor: palette.accent,
    },
    hiddenInput: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
    },

    // Messages
    errorText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.error || '#e74c3c',
      textAlign: 'center',
      marginTop: 12,
    },
    errorPlaceholder: {
      height: 20,
      marginTop: 12,
    },

    // Button
    button: {
      width: '100%',
      backgroundColor: palette.accent,
      paddingVertical: 16,
      borderRadius: 24,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
    },

    // Cancel
    cancelLink: {
      marginTop: 20,
    },
    cancelText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      textDecorationLine: 'underline',
    },
  });
}