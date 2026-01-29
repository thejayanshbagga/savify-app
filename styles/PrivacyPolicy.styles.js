import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../styles/typography';

const createStyles = (palette) =>
  StyleSheet.create({
    backButtonText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    title: {
      fontSize: 32,
      fontFamily: FONT_FAMILY.title,
      color: palette.textPrimary,
      marginBottom: 32,
      letterSpacing: -0.5,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginTop: 32,
      marginBottom: 16,
    },
    paragraph: {
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      lineHeight: 24,
      marginBottom: 16,
    },
    bulletPoint: {
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      lineHeight: 24,
      marginBottom: 12,
      paddingLeft: 8,
    },
    footer: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginTop: 40,
      marginBottom: 20,
      textAlign: 'center',
    },
  });

export default createStyles;
