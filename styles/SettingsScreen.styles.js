import { StyleSheet } from 'react-native';

const createStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
      paddingTop: 60,
    },
    pageLabel: {
      fontSize: 32,
      fontWeight: '300',
      marginBottom: 32,
      color: palette.textPrimary,
      letterSpacing: -0.5,
    },
    sectionHeader: {
      fontSize: 14,
      fontWeight: '500',
      color: palette.accent,
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
      backgroundColor: palette.card,
      borderRadius: 12,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: palette.border,
    },
    optionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: palette.border,
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
      color: palette.textPrimary,
    },
    subtext: {
      fontSize: 13,
      color: palette.textSecondary,
      marginTop: 4,
      fontWeight: '400',
    },
    pageBottomSpacer: {
      height: 24,
    },
  });

export const createModalStyles = (palette) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor:
        palette.background === '#FFFFFF'
          ? 'rgba(22, 36, 71, 0.4)'
          : 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'flex-end',
    },
    sheet: {
      backgroundColor: palette.background,
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
      color: palette.textPrimary,
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
      color: palette.textPrimary,
      fontWeight: '400',
    },
    separator: {
      height: 1,
      backgroundColor: palette.border,
    },
  });

export default createStyles;
