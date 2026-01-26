import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 40,
  },
  headline: {
    fontSize: 32,
    fontWeight: '300',
    color: '#162447',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subheadline: {
    fontSize: 24,
    fontWeight: '400',
    color: '#4A6FA5',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8894A6',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  buttonPrimary: {
    backgroundColor: '#4A6FA5',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 24,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D8DEE9',
    width: '100%',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#162447',
    fontWeight: '400',
    fontSize: 16,
  },
  skipButton: {
    marginTop: 24,
  },
  skipText: {
    color: '#4A6FA5',
    fontSize: 14,
    fontWeight: '400',
  },
});