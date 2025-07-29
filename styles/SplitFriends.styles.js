import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A9BF6',
  },
  topCard: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  profileCircle: {
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    padding: 10,
    width: '85%',
    justifyContent: 'space-around',
  },
  balanceItem: {
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
  },
  balanceValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabSwitch: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#1B4DB1',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  friendList: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.6,
    borderColor: '#ddd',
  },
  avatar: {
    borderWidth: 2,
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontWeight: '500',
    fontSize: 14,
  },
  statusText: {
    fontSize: 12,
  },
  amountText: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  activityList: {
  backgroundColor: '#fff',
  paddingHorizontal: 16,
  paddingBottom: 20,
  },

  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  activityIcon: {
    marginRight: 12,
    color: '#1B4DB1',
  },

  activityText: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  activitySubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});



export default styles;
