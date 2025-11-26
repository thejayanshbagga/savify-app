import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A9BF6',
  },

  // Top profile area
  topCard: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 28,
    backgroundColor: '#5A9BF6',
  },

  profileCircle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  profileInitial: {
    fontSize: 34,
    fontWeight: 'bold',
  },

  profileName: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },

  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 18,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 12,
    width: '88%',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  balanceItem: {
    alignItems: 'center',
    flex: 1,
  },

  balanceLabel: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },

  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },

  // Tabs
  tabSwitch: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    paddingTop: 18,
  },

  tabText: {
    fontSize: 16,
    color: '#888',
    paddingVertical: 4,
  },

  activeTab: {
    color: '#1B4DB1',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  // Filter buttons: outlined pill style
  // Filter buttons: outlined white pills
filterContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingHorizontal: 20,
  paddingTop: 12,
  paddingBottom: 8,
  backgroundColor: '#fff',  
},

filterPill: {
  paddingVertical: 6,
  paddingHorizontal: 18,
  borderRadius: 20,
  borderWidth: 1.5,
  borderColor: '#1B4DB1',
  backgroundColor: '#fff',
},

filterPillText: {
  fontSize: 14,
  color: '#1B4DB1',
  fontWeight: '600',
},

filterPillActive: {
  backgroundColor: '#1B4DB1',
},

filterPillTextActive: {
  color: '#fff',
},


  // Add Expense Button
  addExpenseButton: {
    backgroundColor: '#1B4DB1',
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 6,
    marginBottom: 14,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  addExpenseButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Friends List
  friendList: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 0.6,
    borderColor: '#ddd',
  },

  avatar: {
    borderWidth: 2,
    borderRadius: 24,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  friendDetails: {
    flex: 1,
  },

  friendName: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 2,
  },

  statusText: {
    fontSize: 13,
  },

  amountText: {
    fontWeight: '700',
    fontSize: 16,
  },

  // Expanded friend card
  expandedCard: {
    padding: 14,
    backgroundColor: '#f5f6f8',
    borderRadius: 12,
    marginBottom: 10,
    marginTop: -6,
  },

  expandedText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
  },

  settleButton: {
    backgroundColor: '#1B4DB1',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 8,
  },

  settleButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  // Activity
  activityList: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 22,
  },

  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 14,
    marginVertical: 6,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },

  activityIcon: {
    marginRight: 14,
    color: '#1B4DB1',
  },

  activityText: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },

  activitySubtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
});

export default styles;
