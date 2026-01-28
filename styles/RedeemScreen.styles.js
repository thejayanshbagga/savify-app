import { StyleSheet } from 'react-native';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: palette.textPrimary,
      marginTop: 24,
    },
    rewardCard: {
      backgroundColor: palette.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: palette.border,
      padding: 16,
      marginTop: 16,
    },
    rewardTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: palette.textPrimary,
    },
    rewardMeta: {
      fontSize: 13,
      color: palette.textSecondary,
      marginTop: 4,
    },
    redeemButton: {
      backgroundColor: palette.accent,
      paddingVertical: 12,
      borderRadius: 20,
      marginTop: 12,
      alignItems: 'center',
    },
    redeemText: {
      color: palette.textOnAccent ?? '#FFFFFF',
      fontWeight: '500',
    },
  });
}
