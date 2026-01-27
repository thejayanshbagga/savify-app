import { StyleSheet } from 'react-native';

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
      fontWeight: '300',
      color: palette.textPrimary,
      marginBottom: 8,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '400',
      color: palette.textSecondary,
      marginBottom: 40,
    },
    input: {
      borderWidth: 1,
      borderColor: palette.border,
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      backgroundColor: palette.card,
      fontSize: 16,
      color: palette.textPrimary,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: palette.border,
      borderRadius: 8,
      backgroundColor: palette.card,
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    passwordInput: {
      flex: 1,
      paddingVertical: 16,
      fontSize: 16,
      color: palette.textPrimary,
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    rememberMeText: {
      fontSize: 14,
      color: palette.textPrimary,
    },
    forgotPassword: {
      fontSize: 14,
      color: palette.accent,
    },
    button: {
      backgroundColor: palette.accent,
      paddingVertical: 16,
      borderRadius: 24,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 32,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: palette.border,
    },
    dividerText: {
      marginHorizontal: 16,
      fontSize: 14,
      color: palette.textSecondary,
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
    googleButtonText: {
      fontSize: 16,
      color: palette.textPrimary,
    },
  });
}
