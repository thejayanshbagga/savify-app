import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

const createStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
      paddingTop: 60, // FIXED: Added proper top padding for back button
    },
    backButton: {
      marginBottom: 20, // FIXED: Proper spacing after back button
    },
    scrollContent: {
      paddingBottom: 40,
    },
    pageLabel: {
      fontSize: 32,
      fontFamily: FONT_FAMILY.title,
      marginBottom: 32,
      color: palette.textPrimary,
      letterSpacing: -0.5,
    },
    sectionHeader: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.accent,
      marginBottom: 12,
      marginTop: 8,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    sectionSpacer: {
      height: 24,
    },
    pageBottomSpacer: {
      height: 60,
    },
    optionsCard: {
      backgroundColor: palette.card,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: palette.border,
      overflow: 'hidden',
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: palette.border,
    },
    lastOptionRow: {
      borderBottomWidth: 0,
    },
    iconLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    textBlock: {
      marginLeft: 12,
      flex: 1,
    },
    optionText: {
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
      marginBottom: 2,
    },
    subtext: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      lineHeight: 18,
    },
  });

export const createModalStyles = (palette) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    sheet: {
      backgroundColor: palette.card,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 24,
      paddingBottom: 40,
      paddingHorizontal: 20,
      maxHeight: '70%',
    },
    sheetTitle: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginBottom: 20,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
    },
    optionText: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    separator: {
      height: 1,
      backgroundColor: palette.border,
    },
  });

export default createStyles;