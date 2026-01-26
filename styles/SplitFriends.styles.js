import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // Top profile area
  topCard: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 32,
    backgroundColor: '#FFFFFF',
  },

  profileCircle: {
    backgroundColor: '#F8F9FB',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4A6FA5',
  },

  profileInitial: {
    fontSize: 28,
    fontWeight: '400',
    color: '#4A6FA5',
  },

  profileName: {
    color: '#162447',
    fontSize: 20,
    marginTop: 16,
    fontWeight: '400',
    letterSpacing: -0.3,
  },

  balanceCard: {
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    marginTop: 24,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: '90%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },

  balanceItem: {
    alignItems: 'center',
    flex: 1,
  },

  balanceLabel: {
    fontSize: 11,
    color: '#8894A6',
    marginBottom: 8,
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  balanceValue: {
    fontSize: 24,
    fontWeight: '300',
    color: '#162447',
    letterSpacing: -0.5,
  },

  // Tabs
  tabSwitch: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE9',
  },

  tabText: {
    fontSize: 16,
    color: '#8894A6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: '400',
  },

  activeTab: {
    color: '#4A6FA5',
    fontWeight: '500',
    borderBottomWidth: 2,
    borderBottomColor: '#4A6FA5',
  },

  // Filter buttons
  filterContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },

  filterPill: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D8DEE9',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  filterPillText: {
    fontSize: 13,
    color: '#4A6FA5',
    fontWeight: '500',
  },

  filterPillActive: {
    backgroundColor: '#4A6FA5',
    borderColor: '#4A6FA5',
  },

  filterPillTextActive: {
    color: '#FFFFFF',
  },

  // Friends List
  friendList: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },

  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#D8DEE9',
  },

  avatar: {
    borderWidth: 2,
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#F8F9FB',
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
    color: '#162447',
  },

  statusText: {
    fontSize: 13,
    fontWeight: '400',
  },

  amountText: {
    fontWeight: '400',
    fontSize: 20,
    color: '#162447',
    letterSpacing: -0.3,
  },

  // Expanded friend card
  expandedCard: {
    padding: 20,
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },

  expandedText: {
    fontSize: 14,
    color: '#4A6FA5',
    marginBottom: 8,
    fontWeight: '400',
  },

  settleButton: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 12,
    alignSelf: 'flex-start',
  },

  settleButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  // Activity
  activityList: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 100,
  },

  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE9',
  },

  activityIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F8F9FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  activityIcon: {
    color: '#4A6FA5',
  },

  activityText: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#162447',
    marginBottom: 4,
  },

  activitySubtitle: {
    fontSize: 13,
    color: '#8894A6',
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
    color: '#162447',
    marginBottom: 8,
    textAlign: 'center',
  },

  emptyStateSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8894A6',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;