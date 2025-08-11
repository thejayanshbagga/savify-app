// styles/SettingsScreen.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E3FF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  pageLabel: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#243B55',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#243B55',
    marginTop: 0,
    marginBottom: 12,
  },
  // for ScrollView contentContainerStyle
  scrollContent: {
    paddingBottom: 8,
  },
  // Spacer to separate sections
  sectionSpacer: {
    height: 16,
  },
  optionsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingTop: 2,         // top padding only
    paddingHorizontal: 10,
    elevation: 4,          // Android shadow
    shadowColor: '#000',   // iOS shadow
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lastOptionRow: {
    borderBottomWidth: 0,
    paddingBottom: 18,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBlock: {
    marginLeft: 12,
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
  // small bottom padding so last card isn't flush with screen bottom
  pageBottomSpacer: {
    height: 8,
  },
});

// Modal / bottom sheet styles (named export)
export const modalStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#243B55',
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#222',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e6e6e6',
  },
});

export default styles;
