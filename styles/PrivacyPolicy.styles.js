import { StyleSheet } from 'react-native';

const createStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 60,
    },
    backButton: {
      marginBottom: 20,
    },
    backButtonText: {
      fontSize: 16,
      fontWeight: '400',
      color: palette.textPrimary,
    },
    title: {
      fontSize: 32,
      fontWeight: '300',
      color: palette.textPrimary,
      marginBottom: 32,
      letterSpacing: -0.5,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '500',
      color: palette.textPrimary,
      marginTop: 32,
      marginBottom: 16,
      letterSpacing: -0.3,
    },
    paragraph: {
      fontSize: 15,
      fontWeight: '400',
      color: palette.textSecondary,
      lineHeight: 24,
      marginBottom: 16,
    },
    bulletPoint: {
      fontSize: 15,
      fontWeight: '400',
      color: palette.textSecondary,
      lineHeight: 24,
      marginBottom: 12,
      paddingLeft: 8,
    },
    footer: {
      textAlign: 'center',
      fontSize: 13,
      color: palette.textSecondary,
      marginTop: 40,
      marginBottom: 20,
      fontWeight: '400',
    },
  });

export default createStyles;
