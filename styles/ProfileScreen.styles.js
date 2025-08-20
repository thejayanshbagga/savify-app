import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E3FF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  pageLabel: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#243B55',
  },
  headerCard: {
    backgroundColor: '#001AFF',
    padding: 20,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    backgroundColor: '#ccc',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  handle: {
    color: '#d0d0ff',
    fontSize: 14,
  },
  optionsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  subtext: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
});
