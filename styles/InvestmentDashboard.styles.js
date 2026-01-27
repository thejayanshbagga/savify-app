import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function createStyles(palette) {
  return StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: palette.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.accent,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: palette.textPrimary,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: palette.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Card styles
  cardNoBg: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: palette.textPrimary,
    marginBottom: 16,
    letterSpacing: -0.3,
  },

  // Investment Fund Balance styles
  fundCard: {
    backgroundColor: palette.card,
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: palette.border,
  },
  fundLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.accent,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fundBalance: {
    fontSize: 48,
    fontWeight: '300',
    color: palette.textPrimary,
    marginBottom: 24,
    letterSpacing: -1,
  },
  timeframeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  timeframeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: palette.background,
    borderWidth: 1,
    borderColor: palette.border,
  },
  timeframeButtonActive: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  timeframeText: {
    fontSize: 12,
    fontWeight: '500',
    color: palette.textSecondary,
    marginBottom: 4,
  },
  timeframeTextActive: {
    color: palette.background,
  },
  timeframeValue: {
    fontSize: 16,
    fontWeight: '500',
    color: palette.textPrimary,
  },
  timeframeValueActive: {
    color: palette.background,
  },
  fundFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: palette.border,
  },
  fundFooterItem: {
    flex: 1,
  },
  fundFooterLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: palette.textSecondary,
    marginBottom: 6,
  },
  fundFooterValue: {
    fontSize: 22,
    fontWeight: '400',
    color: palette.textPrimary,
  },
  fundFooterReturns: {
    fontSize: 22,
    fontWeight: '400',
    color: palette.success,
  },

  // My Holdings styles
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '400',
    color: palette.textPrimary,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  holdingCard: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
  },
  holdingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  holdingInfo: {
    flex: 1,
    marginRight: 16,
  },
  holdingSymbol: {
    fontSize: 18,
    fontWeight: '500',
    color: palette.textPrimary,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  holdingName: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.accent,
    marginBottom: 8,
    lineHeight: 18,
  },
  holdingMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  holdingType: {
    fontSize: 11,
    fontWeight: '400',
    color: palette.textSecondary,
  },
  holdingValues: {
    alignItems: 'flex-end',
  },
  holdingTotalValue: {
    fontSize: 24,
    fontWeight: '400',
    color: palette.textPrimary,
    marginBottom: 4,
  },
  holdingGrowthPositive: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.success,
  },
  holdingGrowthNegative: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.error,
  },
  holdingDetails: {
    marginTop: 12,
  },
  holdingDetailsText: {
    fontSize: 13,
    fontWeight: '400',
    color: palette.textSecondary,
  },

  // Risk Badge styles
  riskBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  riskBadgeText: {
    fontSize: 10,
    fontWeight: '500',
    color: palette.background,
    letterSpacing: 0.3,
  },

  // Recommended Investments styles
  recommendedCard: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
  },
  recommendedHeader: {
    marginBottom: 16,
  },
  recommendedInfo: {},
  recommendedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  recommendedSymbol: {
    fontSize: 18,
    fontWeight: '500',
    color: palette.textPrimary,
    letterSpacing: -0.2,
  },
  ownedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  ownedBadgeText: {
    fontSize: 11,
    fontWeight: '500',
    color: palette.success,
  },
  recommendedName: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.accent,
    marginBottom: 8,
    lineHeight: 18,
  },
  recommendedDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: palette.textSecondary,
    marginBottom: 12,
    lineHeight: 19,
  },
  recommendedMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  recommendedType: {
    fontSize: 11,
    fontWeight: '400',
    color: palette.textSecondary,
  },
  recommendedFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recommendedStats: {
    flexDirection: 'row',
    gap: 24,
    flex: 1,
  },
  recommendedPriceSection: {},
  recommendedPriceLabel: {
    fontSize: 11,
    fontWeight: '400',
    color: palette.textSecondary,
    marginBottom: 4,
  },
  recommendedPrice: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.textPrimary,
  },
  recommendedReturnSection: {},
  recommendedReturnLabel: {
    fontSize: 11,
    fontWeight: '400',
    color: palette.textSecondary,
    marginBottom: 4,
  },
  recommendedReturnPositive: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.success,
  },
  recommendedReturnNegative: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.error,
  },
  investButton: {
    backgroundColor: palette.accent,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },
  investButtonText: {
    color: palette.background,
    fontWeight: '500',
    fontSize: 14,
  },

  // Recent Activity styles
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    backgroundColor: palette.card,
  },
  activityInfo: {
    flex: 1,
  },
  activityAction: {
    fontSize: 15,
    fontWeight: '400',
    color: palette.textPrimary,
    marginBottom: 4,
  },
  activityDetails: {
    fontSize: 13,
    fontWeight: '400',
    color: palette.textSecondary,
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 12,
    fontWeight: '400',
    color: palette.textSecondary,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.textPrimary,
  },
});
}