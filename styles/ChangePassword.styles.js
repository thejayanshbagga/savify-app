import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../styles/typography';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 22,
      fontFamily: FONT_FAMILY.title,
      marginBottom: 16,
      color: palette.textPrimary,
    },
    field: { marginBottom: 14 },
    label: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
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
      fontFamily: FONT_FAMILY.body,
      paddingRight: 36,
      color: palette.textPrimary,
    },
    eye: {
      position: 'absolute',
      right: 10,
      top: 12,
    },
    hint: {
      fontSize: 12,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
      opacity: 0.7,
      marginTop: 6,
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
      fontFamily: FONT_FAMILY.subheading,
    },
    backText: {
      color: palette.textPrimary,
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
    },
  });
}
