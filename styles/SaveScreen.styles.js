import { StyleSheet } from 'react-native';

const createStyles = (palette) =>
  StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: palette.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
    },
    header: {
      alignItems: 'center',
      marginBottom: 40,
      position: 'relative',
    },
    monthText: {
      color: palette.accent,
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 12,
    },
    totalSaved: {
      color: palette.textPrimary,
      fontSize: 56,
      fontWeight: '300',
      letterSpacing: -1.5,
    },
    card: {
      backgroundColor: palette.card,
      borderRadius: 12,
      padding: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: palette.border,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 20,
      color: palette.textPrimary,
      letterSpacing: -0.3,
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    cardLabel: {
      color: palette.textSecondary,
      fontSize: 12,
      fontWeight: '400',
      marginBottom: 6,
    },
    cardValue: {
      color: palette.textPrimary,
      fontSize: 20,
      fontWeight: '400',
    },
    progressBarBg: {
      height: 6,
      borderRadius: 3,
      backgroundColor: palette.border,
      overflow: 'hidden',
      marginTop: 8,
    },
    progressBarFg: {
      height: '100%',
      borderRadius: 3,
      backgroundColor: palette.accent,
    },
    breakdownItem: {
      marginBottom: 24,
      paddingTop: 20,
      borderTopWidth: 1,
      borderTopColor: palette.border,
    },
    breakdownLabel: {
      marginLeft: 12,
      fontWeight: '400',
      fontSize: 15,
      color: palette.textPrimary,
    },
    roundupText: {
      fontSize: 13,
      color: palette.textSecondary,
      marginBottom: 8,
      marginTop: 8,
    },
    dropdown: {
      position: 'absolute',
      top: 30,
      backgroundColor: palette.card,
      borderRadius: 8,
      width: 140,
      zIndex: 10,
      borderWidth: 1,
      borderColor: palette.border,
    },
    dropdownItem: {
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    dropdownItemText: {
      fontSize: 14,
      fontWeight: '400',
      color: palette.textPrimary,
    },
    investmentButton: {
      backgroundColor: palette.accent,
      borderRadius: 12,
      padding: 20,
      marginBottom: 24,
    },
    investmentButtonContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    investmentButtonLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    investmentButtonText: {
      marginLeft: 16,
    },
    investmentButtonTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: palette.onAccent,
      marginBottom: 4,
    },
    investmentButtonSubtitle: {
      fontSize: 13,
      fontWeight: '400',
      color: palette.onAccentMuted,
    },
    iconWrapper: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default createStyles;
