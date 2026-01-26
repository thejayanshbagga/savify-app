import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    color: '#4A6FA5',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#162447',
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    color: '#162447',
    marginBottom: 16,
    letterSpacing: -0.3,
  },

  // Investment Fund Balance styles
  fundCard: {
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },
  fundLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4A6FA5',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fundBalance: {
    fontSize: 48,
    fontWeight: '300',
    color: '#162447',
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
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8DEE9',
  },
  timeframeButtonActive: {
    backgroundColor: '#4A6FA5',
    borderColor: '#4A6FA5',
  },
  timeframeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8894A6',
    marginBottom: 4,
  },
  timeframeTextActive: {
    color: '#FFFFFF',
  },
  timeframeValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#162447',
  },
  timeframeValueActive: {
    color: '#FFFFFF',
  },
  fundFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#D8DEE9',
  },
  fundFooterItem: {
    flex: 1,
  },
  fundFooterLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8894A6',
    marginBottom: 6,
  },
  fundFooterValue: {
    fontSize: 22,
    fontWeight: '400',
    color: '#162447',
  },
  fundFooterReturns: {
    fontSize: 22,
    fontWeight: '400',
    color: '#10B981',
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
    color: '#162447',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8894A6',
    textAlign: 'center',
    lineHeight: 20,
  },
  holdingCard: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE9',
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
    color: '#162447',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  holdingName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4A6FA5',
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
    color: '#8894A6',
  },
  holdingValues: {
    alignItems: 'flex-end',
  },
  holdingTotalValue: {
    fontSize: 24,
    fontWeight: '400',
    color: '#162447',
    marginBottom: 4,
  },
  holdingGrowthPositive: {
    fontSize: 14,
    fontWeight: '400',
    color: '#10B981',
  },
  holdingGrowthNegative: {
    fontSize: 14,
    fontWeight: '400',
    color: '#EF4444',
  },
  holdingDetails: {
    marginTop: 12,
  },
  holdingDetailsText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#8894A6',
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
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  // Recommended Investments styles
  recommendedCard: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE9',
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
    color: '#162447',
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
    color: '#10B981',
  },
  recommendedName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4A6FA5',
    marginBottom: 8,
    lineHeight: 18,
  },
  recommendedDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: '#8894A6',
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
    color: '#8894A6',
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
    color: '#8894A6',
    marginBottom: 4,
  },
  recommendedPrice: {
    fontSize: 16,
    fontWeight: '400',
    color: '#162447',
  },
  recommendedReturnSection: {},
  recommendedReturnLabel: {
    fontSize: 11,
    fontWeight: '400',
    color: '#8894A6',
    marginBottom: 4,
  },
  recommendedReturnPositive: {
    fontSize: 16,
    fontWeight: '400',
    color: '#10B981',
  },
  recommendedReturnNegative: {
    fontSize: 16,
    fontWeight: '400',
    color: '#EF4444',
  },
  investButton: {
    backgroundColor: '#4A6FA5',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },
  investButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
  },

  // Recent Activity styles
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DEE9',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    backgroundColor: '#F8F9FB',
  },
  activityInfo: {
    flex: 1,
  },
  activityAction: {
    fontSize: 15,
    fontWeight: '400',
    color: '#162447',
    marginBottom: 4,
  },
  activityDetails: {
    fontSize: 13,
    fontWeight: '400',
    color: '#8894A6',
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8894A6',
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#162447',
  },
});