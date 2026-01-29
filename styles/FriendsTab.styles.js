import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../styles/typography';

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
    fontFamily: FONT_FAMILY.title,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FONT_FAMILY.subheading,
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
    fontFamily: FONT_FAMILY.body,
    color: '#666',
  },
  balanceValue: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.subheading,
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
    fontFamily: FONT_FAMILY.body,
    color: '#888',
  },
  activeTab: {
    color: '#1B4DB1',
    fontFamily: FONT_FAMILY.subheading,
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
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 14,
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 14,
  },
  statusText: {
    fontFamily: FONT_FAMILY.body,
    fontSize: 12,
  },
  amountText: {
    fontFamily: FONT_FAMILY.subheading,
    fontSize: 14,
  },
});

export default styles;
