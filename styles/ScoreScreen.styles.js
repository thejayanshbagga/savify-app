import { StyleSheet } from 'react-native';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingBottom: 40,
      backgroundColor: palette.background,
    },

    /* HERO */
    scoreContainer: {
      alignItems: 'center',
      marginTop: 24,
    },
    badge: {
      alignItems: 'center',
    },
    scoreLabel: {
      fontSize: 16,
      color: palette.textSecondary,
    },
    scoreValue: {
      fontSize: 40,
      fontWeight: '600',
      color: palette.textPrimary,
      marginTop: 4,
    },
    heroSubtitle: {
      marginTop: 14,
      color: palette.textSecondary,
      opacity: 0.75,
      fontSize: 14,
      textAlign: 'center',
    },
    redeemButton: {
      marginTop: 20,
      backgroundColor: palette.accent,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 24,
    },
    redeemText: {
      color: palette.textOnAccent ?? '#FFFFFF',
      fontWeight: '500',
      fontSize: 15,
    },

    /* SECTIONS */
    section: {
      marginTop: 32,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: palette.textPrimary,
    },
    seeAll: {
      fontSize: 14,
      color: palette.textSecondary,
    },

    /* CARD */
    card: {
      backgroundColor: palette.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: palette.border,
      padding: 16,
      marginTop: 12,
    },
    cardTitle: {
      fontSize: 15,
      fontWeight: '500',
      color: palette.textPrimary,
    },
    cardSubtitle: {
      fontSize: 13,
      color: palette.textSecondary,
      marginTop: 4,
    },
    divider: {
      height: 1,
      backgroundColor: palette.border,
      marginVertical: 10,
    },

    /* REWARDS */
    rewardsRow: {
      flexDirection: 'row',
    },
    rewardCard: {
      backgroundColor: palette.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: palette.border,
      padding: 16,
      marginRight: 12,
      width: 160,
    },
    rewardTitle: {
      fontSize: 15,
      fontWeight: '500',
      color: palette.textPrimary,
    },
    rewardSubtitle: {
      fontSize: 13,
      color: palette.textSecondary,
      marginTop: 6,
    },
    rewardAction: {
      marginTop: 10,
      fontSize: 14,
      color: palette.accent,
      fontWeight: '500',
    },
  });
}
