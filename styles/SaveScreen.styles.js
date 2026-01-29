import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

const createStyles = (palette) =>
  StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: palette.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    header: {
      marginBottom: 24,
    },
    monthText: {
      color: palette.accent,
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      marginBottom: 12,
    },
    dropdown: {
      position: 'absolute',
      top: 30,
      left: 0,
      backgroundColor: palette.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: palette.border,
      paddingVertical: 8,
      zIndex: 1000,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    dropdownItem: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    dropdownItemText: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    totalSaved: {
      color: palette.textPrimary,
      fontSize: 56,
      fontFamily: FONT_FAMILY.title,
      letterSpacing: -1.5,
    },
    investmentButton: {
      backgroundColor: palette.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: palette.border,
    },
    investmentButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    investmentButtonLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: palette.accent + '20',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    investmentButtonText: {
      flex: 1,
    },
    investmentButtonTitle: {
      fontSize: 16,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginBottom: 4,
    },
    investmentButtonSubtitle: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
    },
    card: {
      backgroundColor: palette.card,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: palette.border,
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginLeft: 8,
    },
    cardLabel: {
      fontSize: 12,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 4,
    },
    cardValue: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
    },
    progressBarBg: {
      height: 6,
      backgroundColor: palette.border,
      borderRadius: 3,
      overflow: 'hidden',
    },
    progressBarFg: {
      height: '100%',
      backgroundColor: palette.accent,
      borderRadius: 3,
    },
    breakdownItem: {
      marginTop: 16,
      paddingTop: 16,
      borderTopWidth: 1,
      borderTopColor: palette.border,
    },
    breakdownLabel: {
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
      marginLeft: 8,
    },
    roundupText: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      marginBottom: 8,
    },
  });

export default createStyles;