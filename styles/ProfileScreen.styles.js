import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';

export default function createStyles(palette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: 20,
      paddingTop: 60,
    },
    pageLabel: {
      fontSize: 28,
      fontFamily: FONT_FAMILY.title,
      marginBottom: 24,
      color: palette.textPrimary,
      letterSpacing: -0.5,
    },
    headerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: palette.card,
      borderRadius: 16,
      padding: 20,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: palette.border,
    },
    avatarContainer: {
      position: 'relative',
      marginRight: 16,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: palette.border,
    },
    cameraIconContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: palette.accent,
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: palette.card,
    },
    name: {
      fontSize: 17,
      fontFamily: FONT_FAMILY.subheading,
      color: palette.textPrimary,
      marginBottom: 4,
    },
    handle: {
      fontSize: 13,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
    },
    optionsCard: {
      backgroundColor: palette.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: palette.border,
      overflow: 'hidden',
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: palette.border,
    },
    iconLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      gap: 12,
    },
    optionText: {
      fontSize: 15,
      fontFamily: FONT_FAMILY.body,
      color: palette.textPrimary,
      marginBottom: 2,
    },
    subtext: {
      fontSize: 12,
      fontFamily: FONT_FAMILY.body,
      color: palette.textSecondary,
      lineHeight: 16,
    },
  });
}