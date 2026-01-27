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
    button: {
      backgroundColor: palette.accent,
      paddingVertical: 16,
      borderRadius: 24,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
    },
    buttonSecondary: {
      backgroundColor: palette.card,
      paddingVertical: 16,
      borderRadius: 24,
      alignItems: 'center',
      marginBottom: 12,
      borderWidth: 1,
      borderColor: palette.border,
    },
    buttonSecondaryText: {
      color: palette.textPrimary,
      fontSize: 16,
    },
  });
}
