import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    backButton: {
      marginBottom: 20,
    },
    backText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.accent,
    },
    content: {
      alignItems: 'center',
      marginTop: 10,
    },
    title: {
      fontSize: 28,
      fontFamily: FONT_FAMILY.title,
      color: palette.textPrimary,
      marginBottom: 8,
      textAlign: 'center',
      letterSpacing: -0.5,
    },
    rewardMeta: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 32,
    },
    rewardCard: {
      backgroundColor: palette.card,
      borderRadius: 16,
      padding: 24,
      width: '100%',
      borderWidth: 1,
      borderColor: palette.border,
      marginBottom: 20,
    },
    rewardTitle: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      lineHeight: 24,
      textAlign: 'center',
    },
    redeemButton: {
      backgroundColor: palette.accent,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 24,
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
    },
    redeemText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
    },
  });
}