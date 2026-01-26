import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/InvestmentDashboard.styles';

export default function InvestmentDashboard() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('month');
  
  const [dashboardData, setDashboardData] = useState({
    investmentFund: {
      balance: 12450.00,
      growth: {
        week: 2.3,
        month: 5.7,
        year: 18.4
      },
      invested: 10500.00,
      returns: 1950.00
    },
    myHoldings: [
      { 
        id: 1, 
        symbol: 'VTI', 
        name: 'Vanguard Total Stock Market ETF',
        shares: 25,
        currentPrice: 245.30,
        totalValue: 6132.50,
        growth: 12.3,
        type: 'Stock ETF',
        riskLevel: 'Medium'
      },
      { 
        id: 2, 
        symbol: 'BND', 
        name: 'Vanguard Total Bond Market ETF',
        shares: 50,
        currentPrice: 78.50,
        totalValue: 3925.00,
        growth: 4.2,
        type: 'Bond ETF',
        riskLevel: 'Low'
      },
      { 
        id: 3, 
        symbol: 'QQQ', 
        name: 'Invesco QQQ Trust',
        shares: 8,
        currentPrice: 412.75,
        totalValue: 3302.00,
        growth: 15.8,
        type: 'Tech ETF',
        riskLevel: 'Medium-High'
      }
    ],
    recommendedInvestments: [
      { 
        symbol: 'VTI', 
        name: 'Vanguard Total Stock Market ETF',
        description: 'Broad exposure to the entire U.S. stock market',
        currentPrice: 245.30,
        ytdReturn: 12.3,
        type: 'Stock ETF',
        riskLevel: 'Medium'
      },
      { 
        symbol: 'BND', 
        name: 'Vanguard Total Bond Market ETF',
        description: 'Diversified bond portfolio for stable income',
        currentPrice: 78.50,
        ytdReturn: 4.2,
        type: 'Bond ETF',
        riskLevel: 'Low'
      },
      { 
        symbol: 'QQQ', 
        name: 'Invesco QQQ Trust',
        description: 'Top 100 companies on the Nasdaq exchange',
        currentPrice: 412.75,
        ytdReturn: 15.8,
        type: 'Tech ETF',
        riskLevel: 'Medium-High'
      },
      { 
        symbol: 'SCHD', 
        name: 'Schwab US Dividend Equity ETF',
        description: 'High-quality dividend stocks for steady returns',
        currentPrice: 78.90,
        ytdReturn: 9.5,
        type: 'Dividend ETF',
        riskLevel: 'Medium'
      },
      { 
        symbol: 'VNQ', 
        name: 'Vanguard Real Estate ETF',
        description: 'Real estate investment trusts across the U.S.',
        currentPrice: 89.20,
        ytdReturn: 7.8,
        type: 'Real Estate ETF',
        riskLevel: 'Medium'
      },
      { 
        symbol: 'VXUS', 
        name: 'Vanguard Total International Stock ETF',
        description: 'Global diversification outside the United States',
        currentPrice: 58.40,
        ytdReturn: 8.9,
        type: 'International ETF',
        riskLevel: 'Medium-High'
      }
    ],
    recentActivity: [
      { id: 1, action: 'Bought', symbol: 'VTI', shares: 5, price: 245.30, date: 'Jan 15', total: 1226.50 },
      { id: 2, action: 'Dividend', symbol: 'BND', amount: 45.00, date: 'Jan 10' },
      { id: 3, action: 'Bought', symbol: 'QQQ', shares: 2, price: 412.75, date: 'Jan 5', total: 825.50 }
    ]
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const getRiskColor = (riskLevel) => {
    switch(riskLevel) {
      case 'Low': return '#10B981';
      case 'Medium': return '#F59E0B';
      case 'Medium-High': return '#F97316';
      case 'High': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const renderInvestmentFund = () => (
    <View style={styles.fundCard}>
      <Text style={styles.fundLabel}>Portfolio Value</Text>
      <Text style={styles.fundBalance}>${dashboardData.investmentFund.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      
      <View style={styles.timeframeContainer}>
        {[
          { key: 'week', label: '1W' },
          { key: 'month', label: '1M' },
          { key: 'year', label: '1Y' }
        ].map(period => (
          <TouchableOpacity 
            key={period.key}
            onPress={() => setTimeframe(period.key)}
            style={[
              styles.timeframeButton,
              timeframe === period.key && styles.timeframeButtonActive
            ]}
          >
            <Text style={[
              styles.timeframeText,
              timeframe === period.key && styles.timeframeTextActive
            ]}>
              {period.label}
            </Text>
            <Text style={[
              styles.timeframeValue,
              timeframe === period.key && styles.timeframeValueActive
            ]}>
              +{dashboardData.investmentFund.growth[period.key]}%
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.fundFooter}>
        <View style={styles.fundFooterItem}>
          <Text style={styles.fundFooterLabel}>Invested</Text>
          <Text style={styles.fundFooterValue}>${dashboardData.investmentFund.invested.toLocaleString()}</Text>
        </View>
        <View style={styles.fundFooterItem}>
          <Text style={styles.fundFooterLabel}>Returns</Text>
          <Text style={styles.fundFooterReturns}>+${dashboardData.investmentFund.returns.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );

  const renderMyHoldings = () => (
    <View style={styles.cardNoBg}>
      <Text style={styles.sectionTitle}>Your investments</Text>
      
      {dashboardData.myHoldings.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyStateIcon}>
            <Ionicons name="trending-up-outline" size={48} color="#D1D5DB" />
          </View>
          <Text style={styles.emptyStateText}>Start investing today</Text>
          <Text style={styles.emptyStateSubtext}>
            Choose from our expertly selected{'\n'}investment options below
          </Text>
        </View>
      ) : (
        <View>
          {dashboardData.myHoldings.map((holding, index) => (
            <View key={holding.id} style={styles.holdingCard}>
              <View style={styles.holdingHeader}>
                <View style={styles.holdingInfo}>
                  <Text style={styles.holdingSymbol}>{holding.symbol}</Text>
                  <Text style={styles.holdingName}>{holding.name}</Text>
                  <View style={styles.holdingMetaRow}>
                    <Text style={styles.holdingType}>{holding.type}</Text>
                    <Text style={styles.holdingType}>•</Text>
                    <View style={[styles.riskBadge, { backgroundColor: getRiskColor(holding.riskLevel) }]}>
                      <Text style={styles.riskBadgeText}>{holding.riskLevel.replace('-', ' ').toUpperCase()}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.holdingValues}>
                  <Text style={styles.holdingTotalValue}>${holding.totalValue.toLocaleString()}</Text>
                  <Text style={holding.growth >= 0 ? styles.holdingGrowthPositive : styles.holdingGrowthNegative}>
                    {holding.growth >= 0 ? '+' : ''}{holding.growth}%
                  </Text>
                </View>
              </View>
              
              <View style={styles.holdingDetails}>
                <Text style={styles.holdingDetailsText}>
                  {holding.shares} shares · ${holding.currentPrice.toFixed(2)} per share
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const renderRecommendedInvestments = () => (
    <View style={styles.cardNoBg}>
      <Text style={styles.sectionTitle}>Recommended by our team</Text>
      
      <View>
        {dashboardData.recommendedInvestments.map((investment, index) => {
          const isOwned = dashboardData.myHoldings.some(h => h.symbol === investment.symbol);
          
          return (
            <View key={index} style={styles.recommendedCard}>
              <View style={styles.recommendedHeader}>
                <View style={styles.recommendedInfo}>
                  <View style={styles.recommendedTitleRow}>
                    <Text style={styles.recommendedSymbol}>{investment.symbol}</Text>
                    {isOwned && (
                      <View style={styles.ownedBadge}>
                        <Ionicons name="checkmark-circle" size={14} color="#10B981" />
                        <Text style={styles.ownedBadgeText}>Owned</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.recommendedName}>{investment.name}</Text>
                  <Text style={styles.recommendedDescription}>{investment.description}</Text>
                  
                  <View style={styles.recommendedMetaRow}>
                    <Text style={styles.recommendedType}>{investment.type}</Text>
                    <Text style={styles.recommendedType}>•</Text>
                    <View style={[styles.riskBadge, { backgroundColor: getRiskColor(investment.riskLevel) }]}>
                      <Text style={styles.riskBadgeText}>{investment.riskLevel.replace('-', ' ').toUpperCase()}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.recommendedFooter}>
                <View style={styles.recommendedStats}>
                  <View style={styles.recommendedPriceSection}>
                    <Text style={styles.recommendedPriceLabel}>Price</Text>
                    <Text style={styles.recommendedPrice}>${investment.currentPrice.toFixed(2)}</Text>
                  </View>
                  <View style={styles.recommendedReturnSection}>
                    <Text style={styles.recommendedReturnLabel}>YTD</Text>
                    <Text style={investment.ytdReturn >= 0 ? styles.recommendedReturnPositive : styles.recommendedReturnNegative}>
                      {investment.ytdReturn >= 0 ? '+' : ''}{investment.ytdReturn}%
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.investButton}>
                  <Text style={styles.investButtonText}>Invest</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );

  const renderRecentActivity = () => (
    <View style={styles.cardNoBg}>
      <Text style={styles.sectionTitle}>Activity</Text>
      
      <View>
        {dashboardData.recentActivity.map((activity, index) => (
          <View key={activity.id} style={styles.activityRow}>
            <View style={styles.activityIcon}>
              <Ionicons 
                name={activity.action === 'Bought' ? 'arrow-down' : 'cash-outline'} 
                size={20} 
                color={activity.action === 'Bought' ? '#000000' : '#10B981'} 
              />
            </View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityAction}>
                {activity.action} {activity.symbol}
              </Text>
              <Text style={styles.activityDetails}>
                {activity.action === 'Bought' 
                  ? `${activity.shares} shares · $${activity.price}` 
                  : `Dividend payment`}
              </Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
            </View>
            <Text style={styles.activityAmount}>
              {activity.action === 'Bought' ? `$${activity.total.toFixed(2)}` : `+$${activity.amount.toFixed(2)}`}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.pageTitle}>Investment Dashboard</Text>
        
        {renderInvestmentFund()}
        {renderMyHoldings()}
        {renderRecommendedInvestments()}
        {renderRecentActivity()}
      </ScrollView>
    </SafeAreaView>
  );
}