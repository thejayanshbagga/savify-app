import { StyleSheet } from 'react-native';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      marginBottom: 16,
      color: palette.textPrimary,
    },
    field: { marginBottom: 14 },
    label: {
      fontSize: 14,
      color: palette.textSecondary,
      marginBottom: 6,
    },
    inputWrap: {
      position: 'relative',
      borderWidth: 1,
      borderColor: palette.border,
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 12,
      backgroundColor: palette.card,
    },
    input: {
      fontSize: 16,
      paddingRight: 50,
      color: palette.textPrimary,
    },
    eye: {
      position: 'absolute',
      right: 12,
      top: 12,
      padding: 4,
    },
    button: {
      backgroundColor: palette.accent,
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    note: {
      fontSize: 12,
      color: palette.textSecondary,
      marginTop: 12,
      lineHeight: 18,
    },
    backText: {
      color: palette.textPrimary,
      fontSize: 15,
    },
  });
}
