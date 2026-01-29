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
      fontFamily: FONT_FAMILY.subheading,
    },
    buttonSecondary: {
      backgroundColor: palette.card,
      paddingVertical: 16,
      borderRadius: 24,
      alignItems: 'center',
      marginTop: 8,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: palette.border,
    },
    buttonSecondaryText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
  });
}