import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 40,
    },
    scoreContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    badge: {
      alignItems: 'center',
      marginBottom: 16,
    },
    scoreLabel: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 8,
    },
    scoreValue: {
      fontSize: 56,
      fontFamily: FONT_FAMILY.title,
      color: palette.textPrimary,
      letterSpacing: -2,
    },
    heroSubtitle: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      textAlign: 'center',
      marginBottom: 24,
      paddingHorizontal: 20,
    },
    redeemButton: {
      backgroundColor: palette.accent,
      paddingHorizontal: 32,
      paddingVertical: 14,
      borderRadius: 24,
    },
    redeemText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
    },
    card: {
      backgroundColor: palette.card,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: palette.border,
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginBottom: 8,
    },
    cardSubtitle: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      lineHeight: 20,
    },
    section: {
      marginTop: 32,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
    },
    seeAll: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.accent,
    },
    rewardsRow: {
      flexDirection: 'row',
      gap: 16,
    },
    rewardCard: {
      backgroundColor: palette.card,
      borderRadius: 12,
      padding: 16,
      width: 200,
      borderWidth: 1,
      borderColor: palette.border,
    },
    rewardTitle: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginBottom: 8,
    },
    rewardSubtitle: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 12,
    },
    rewardAction: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.accent,
    },
  });
}