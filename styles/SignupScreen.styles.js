import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#162447',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A6FA5',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8DEE9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#F8F9FB',
    fontSize: 16,
    fontWeight: '400',
    color: '#162447',
  },
  button: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonSecondary: {
    backgroundColor: '#F8F9FB',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },
  buttonSecondaryText: {
    color: '#162447',
    fontSize: 16,
    fontWeight: '400',
  },
});