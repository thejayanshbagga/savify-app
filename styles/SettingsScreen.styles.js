import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  sectionHeader: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A6FA5',
    marginTop: 0,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  sectionSpacer: {
    height: 32,
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
  textBlock: {
    marginLeft: 16,
  },
  optionText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#162447',
  },
  subtext: {
    fontSize: 13,
    color: '#8894A6',
    marginTop: 4,
    fontWeight: '400',
  },
  pageBottomSpacer: {
    height: 24,
  },
});

export const modalStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(22, 36, 71, 0.4)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
    color: '#162447',
    letterSpacing: -0.3,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#162447',
    fontWeight: '400',
  },
  separator: {
    height: 1,
    backgroundColor: '#D8DEE9',
  },
});

export default styles;