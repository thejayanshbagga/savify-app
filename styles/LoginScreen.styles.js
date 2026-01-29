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
      justifyContent: 'center',
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 32,
      fontFamily: FONT_FAMILY.title,
      color: palette.textPrimary,
      marginBottom: 8,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 40,
      lineHeight: 24,
    },
    input: {
      borderWidth: 1,
      borderColor: palette.border,
      padding: 16,
      marginBottom: 16,
      borderRadius: 12,
      backgroundColor: palette.card,
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: palette.border,
      borderRadius: 12,
      backgroundColor: palette.card,
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    passwordInput: {
      flex: 1,
      paddingVertical: 16,
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    rememberMe: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: palette.border,
      borderRadius: 4,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxActive: {
      borderColor: palette.accent,
      backgroundColor: palette.accent,
    },
    checkboxInner: {
      width: 10,
      height: 10,
      backgroundColor: palette.background,
      borderRadius: 2,
    },
    rememberMeText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    forgotPassword: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.accent,
    },
    button: {
      backgroundColor: palette.accent,
      paddingVertical: 16,
      borderRadius: 24,
      alignItems: 'center',
      marginBottom: 24,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: palette.border,
    },
    dividerText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      paddingHorizontal: 16,
    },
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.card,
      paddingVertical: 16,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: palette.border,
    },
    googleLogo: {
      width: 20,
      height: 20,
      marginRight: 12,
    },
    googleButtonText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
  });
}