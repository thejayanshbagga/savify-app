import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 60,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#000000',
    marginBottom: 32,
    letterSpacing: -0.5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 32,
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  paragraph: {
    fontSize: 15,
    fontWeight: '400',
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 16,
  },
  bulletPoint: {
    fontSize: 15,
    fontWeight: '400',
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 12,
    paddingLeft: 8,
  },
  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 40,
    marginBottom: 20,
    fontWeight: '400',
  },
});
