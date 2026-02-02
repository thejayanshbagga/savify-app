// styles/Setup2FAScreen.styles.js
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
      justifyContent: 'flex-start',
      paddingHorizontal: 24,
      paddingTop: 16,
    },

    // Back button
    backButton: {
      alignSelf: 'flex-start',
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
      marginBottom: 28,
    },

    // QR
    qrContainer: {
      marginTop: 16,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: palette.border,
      alignItems: 'center',
      backgroundColor: palette.card,
      marginBottom: 24,
    },
    qrWhiteBg: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 8,
    },

    // Manual key fallback
    manualSection: {
      width: '100%',
      marginBottom: 24,
    },
    manualLabel: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      textAlign: 'center',
      marginBottom: 8,
    },
    keyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: palette.border,
      borderRadius: 12,
      backgroundColor: palette.card,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    keyText: {
      fontSize: 14,
      fontFamily: 'monospace',
      letterSpacing: 1.5,
      color: palette.textPrimary,
      flex: 1,
      marginRight: 12,
    },

    // Code input (step 2)
    codeInput: {
      width: '70%',
      height: 64,
      fontSize: 28,
      fontFamily: FONT_FAMILY.subheading,
      letterSpacing: 8,
      borderWidth: 2,
      borderColor: palette.accent,
      borderRadius: 12,
      backgroundColor: palette.card,
      color: palette.textPrimary,
      paddingHorizontal: 12,
      marginBottom: 8,
    },
    codeInputError: {
      borderColor: palette.error || '#e74c3c',
    },

    // Messages
    errorText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.error || '#e74c3c',
      textAlign: 'center',
      marginBottom: 12,
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

    // Success icon
    successIcon: {
      width: 96,
      height: 96,
      borderRadius: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.accent + '15',
      marginBottom: 24,
    },
  });
}