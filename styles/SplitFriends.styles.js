import { StyleSheet } from 'react-native';

export default function createStyles(palette) {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
  },

  // Top profile area
  topCard: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 32,
    backgroundColor: palette.background,
  },

  profileCircle: {
    backgroundColor: palette.card,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: palette.accent,
  },

  profileInitial: {
    fontSize: 28,
    fontWeight: '400',
    color: palette.accent,
  },

  profileName: {
    color: palette.textPrimary,
    fontSize: 20,
    marginTop: 16,
    fontWeight: '400',
    letterSpacing: -0.3,
  },

  balanceCard: {
    backgroundColor: palette.card,
    borderRadius: 12,
    marginTop: 24,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: '90%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: palette.border,
  },

  balanceItem: {
    alignItems: 'center',
    flex: 1,
  },

  balanceLabel: {
    fontSize: 11,
    color: palette.textSecondary,
    marginBottom: 8,
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  balanceValue: {
    fontSize: 24,
    fontWeight: '300',
    color: palette.textPrimary,
    letterSpacing: -0.5,
  },

  // Tabs
  tabSwitch: {
    backgroundColor: palette.background,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
  },

  tabText: {
    fontSize: 16,
    color: palette.textSecondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: '400',
  },

  activeTab: {
    color: palette.accent,
    fontWeight: '500',
    borderBottomWidth: 2,
    borderBottomColor: palette.accent,
  },

  // Filter buttons
  filterContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: palette.background,
  },

  filterPill: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.card,
    alignItems: 'center',
  },

  filterPillText: {
    fontSize: 13,
    color: palette.accent,
    fontWeight: '500',
  },

  filterPillActive: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },

  filterPillTextActive: {
    color: palette.background,
  },

  // Friends List
  friendList: {
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },

  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: palette.border,
  },

  avatar: {
    borderWidth: 2,
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: palette.card,
  },

  avatarText: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: -0.5,
  },

  friendDetails: {
    flex: 1,
  },

  friendName: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 4,
    color: palette.textPrimary,
  },

  statusText: {
    fontSize: 13,
    fontWeight: '400',
  },

  amountText: {
    fontWeight: '400',
    fontSize: 20,
    color: palette.textPrimary,
    letterSpacing: -0.3,
  },

  // Expanded friend card
  expandedCard: {
    padding: 20,
    backgroundColor: palette.card,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: palette.border,
  },

  expandedText: {
    fontSize: 14,
    color: palette.accent,
    marginBottom: 8,
    fontWeight: '400',
  },

  settleButton: {
    backgroundColor: palette.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 12,
    alignSelf: 'flex-start',
  },

  settleButtonText: {
    color: palette.background,
    fontSize: 14,
    fontWeight: '500',
  },

  // Activity
  activityList: {
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 100,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  activityIcon: {
    color: palette.accent,
  },

  activityText: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: palette.textPrimary,
    marginBottom: 4,
  },

  activitySubtitle: {
    fontSize: 13,
    color: palette.textSecondary,
    marginTop: 2,
    fontWeight: '400',
  },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },

  emptyStateIcon: {
    marginBottom: 16,
  },

  emptyStateText: {
    fontSize: 18,
    fontWeight: '400',
    color: palette.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },

  emptyStateSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
}