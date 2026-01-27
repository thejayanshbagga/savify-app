import { StyleSheet } from 'react-native';

export default function createStyles(palette) {
  return StyleSheet.create({
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
    headerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: palette.card,
      padding: 20,
      borderRadius: 12,
      marginBottom: 32,
      borderWidth: 1,
      borderColor: palette.border,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 16,
      borderWidth: 2,
      borderColor: palette.accent,
    },
    name: {
      fontSize: 18,
      fontWeight: '400',
      color: palette.textPrimary,
      marginBottom: 4,
    },
    handle: {
      fontSize: 14,
      color: palette.textSecondary,
      fontWeight: '400',
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
    iconLabel: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      fontSize: 15,
      fontWeight: '400',
      color: palette.textPrimary,
      marginLeft: 16,
    },
    subtext: {
      fontSize: 13,
      color: palette.textSecondary,
      marginTop: 4,
      marginLeft: 16,
      fontWeight: '400',
    },
  });
}
