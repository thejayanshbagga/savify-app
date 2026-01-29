import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    topCard: {
      backgroundColor: palette.accent,
      paddingTop: 20, // FIXED: Reduced from 40 to stretch blue area up more
      paddingBottom: 24,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    profileCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: palette.card,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
      borderWidth: 3,
      borderColor: palette.background,
    },
    profileInitial: {
      fontSize: 28,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.accent,
    },
    profileName: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.background,
      marginBottom: 16,
    },
    balanceCard: {
      backgroundColor: palette.background,
      borderRadius: 12,
      padding: 16,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    balanceItem: {
      alignItems: 'center',
    },
    balanceLabel: {
      fontSize: 11,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      textTransform: 'uppercase',
      marginBottom: 4,
      letterSpacing: 0.5,
    },
    balanceValue: {
      fontSize: 24,
      fontFamily: FONT_FAMILY.title,
      color: palette.textPrimary,
    },
    tabSwitch: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: palette.card,
      borderBottomWidth: 1,
      borderBottomColor: palette.border,
    },
    tabText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
    },
    activeTab: {
      fontFamily: FONT_FAMILY.subheading,
      color: palette.accent,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      gap: 8,
      backgroundColor: palette.card,
      borderBottomWidth: 1,
      borderBottomColor: palette.border,
    },
    filterPill: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: palette.background,
      borderWidth: 1,
      borderColor: palette.border,
    },
    filterPillActive: {
      backgroundColor: palette.accent,
      borderColor: palette.accent,
    },
    filterPillText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    filterPillTextActive: {
      color: palette.background,
    },
    friendList: {
      // FIXED: Removed flex: 1, just use padding
      padding: 20,
      paddingBottom: 100, // FIXED: Add extra bottom padding for scrolling all the way down
      backgroundColor: palette.background,
    },
    friendCard: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
      backgroundColor: palette.card,
    },
    avatarText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
    },
    friendDetails: {
      flex: 1,
    },
    friendName: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
      marginBottom: 2,
    },
    statusText: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
    },
    amountText: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
    },
    expandedCard: {
      backgroundColor: palette.card,
      borderRadius: 8,
      padding: 16,
      marginTop: 8,
      marginBottom: 12,
      marginLeft: 60,
      borderWidth: 1,
      borderColor: palette.border,
    },
    expandedText: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 8,
    },
    settleButton: {
      backgroundColor: palette.accent,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    settleButtonText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.background,
    },
    emptyState: {
      alignItems: 'center',
      paddingVertical: 60,
    },
    emptyStateIcon: {
      marginBottom: 16,
    },
    emptyStateText: {
      fontSize: 18,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginBottom: 8,
    },
    emptyStateSubtext: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      textAlign: 'center',
    },
    activityList: {
      // FIXED: Removed flex: 1, just use padding
      padding: 20,
      paddingBottom: 100, // FIXED: Add extra bottom padding for scrolling all the way down
      backgroundColor: palette.background,
    },
    activityCard: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: palette.border,
    },
    activityIconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: palette.card,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    activityIcon: {
      color: palette.accent,
    },
    activityText: {
      flex: 1,
    },
    activityTitle: {
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
      marginBottom: 4,
    },
    activitySubtitle: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
    },
  });
}