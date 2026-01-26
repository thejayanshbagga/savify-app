import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  pageLabel: {
    fontSize: 32,
    fontWeight: '300',
    marginBottom: 32,
    color: '#162447',
    letterSpacing: -0.5,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#4A6FA5',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: '#162447',
    marginBottom: 4,
  },
  handle: {
    fontSize: 14,
    color: '#8894A6',
    fontWeight: '400',
  },
  optionsCard: {
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE9',
  },
  lastOptionRow: {
    borderBottomWidth: 0,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#162447',
    marginLeft: 16,
  },
  subtext: {
    fontSize: 13,
    color: '#8894A6',
    marginTop: 4,
    marginLeft: 16,
    fontWeight: '400',
  },
});