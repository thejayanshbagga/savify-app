import { StyleSheet } from 'react-native';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
    },
    logo: {
      width: 80,
      height: 80,
      marginBottom: 40,
    },
    headline: {
      fontSize: 32,
      fontWeight: '300',
      color: palette.textPrimary,
      textAlign: 'center',
      marginBottom: 12,
      letterSpacing: -0.5,
    },
    subheadline: {
      fontSize: 24,
      fontWeight: '400',
      color: palette.accent,
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: -0.3,
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: palette.textSecondary,
      textAlign: 'center',
      marginBottom: 48,
      lineHeight: 24,
    },
    buttonPrimary: {
      backgroundColor: palette.accent,
      paddingHorizontal: 48,
      paddingVertical: 16,
      borderRadius: 24,
      marginBottom: 16,
      width: '100%',
      alignItems: 'center',
    },
    buttonPrimaryText: {
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: 16,
    },
    buttonSecondary: {
      backgroundColor: palette.card,
      paddingHorizontal: 48,
      paddingVertical: 16,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: palette.border,
      width: '100%',
      alignItems: 'center',
    },
    buttonSecondaryText: {
      color: palette.textPrimary,
      fontWeight: '400',
      fontSize: 16,
    },
    skipButton: {
      marginTop: 24,
    },
    skipText: {
      color: palette.textSecondary,
      fontSize: 14,
      fontWeight: '400',
    },
  });
}
