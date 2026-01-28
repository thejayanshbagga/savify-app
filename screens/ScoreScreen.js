import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import useTranslation from '../hooks/useTranslations';
import useTheme from '../hooks/useTheme';
import createStyles from '../styles/ScoreScreen.styles';

export default function ScoreScreen() {
  const navigation = useNavigation();
  const t = useTranslation();
  const [score, setScore] = useState(0);
  const { palette } = useTheme();
  const styles = createStyles(palette);


  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/api/scores/testUser`
        );
        const data = await response.json();
        const scoreValue = Array.isArray(data) ? data[0]?.score : data?.score;
        if (scoreValue !== undefined) setScore(scoreValue);
      } catch (err) {
        console.error(err);
      }
    };

    fetchScore();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.background }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* SCORE HERO */}
        <View style={styles.scoreContainer}>
          <View style={styles.badge}>
            <Text style={styles.scoreLabel}>
              {t.savifyScore || 'Savify Score'}
            </Text>
            <Text style={styles.scoreValue}>
              {score !== 0 ? score : '—'}
            </Text>
          </View>

          <Text style={styles.heroSubtitle}>
            Earn points by saving, investing, and staying consistent
          </Text>

          <TouchableOpacity
            style={styles.redeemButton}
            onPress={() =>
              navigation.navigate('Redeem', {
                title: 'Savify Rewards',
                expiry: 'Ongoing',
              })
            }
          >
            <Text style={styles.redeemText}>Redeem Points</Text>
          </TouchableOpacity>
        </View>

        {/* HOW YOU EARN POINTS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Investing</Text>
          <Text style={styles.cardSubtitle}>
            Earn points based on how much you invest
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Saving</Text>
          <Text style={styles.cardSubtitle}>
            Earn points when you consistently add to savings
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Consistency bonuses</Text>
          <Text style={styles.cardSubtitle}>
            Streaks and long-term habits unlock extra points
          </Text>
        </View>


        {/* REWARDS PREVIEW */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Rewards</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.rewardsRow}>
              <TouchableOpacity
                style={styles.rewardCard}
                onPress={() =>
                  navigation.navigate('Redeem', {
                    title: '$5 Coffee Gift Card',
                    expiry: 'Mar 31, 2026',
                  })
                }
              >
                <Text style={styles.rewardTitle}>$5 Coffee Gift Card</Text>
                <Text style={styles.rewardSubtitle}>500 points</Text>
                <Text style={styles.rewardAction}>Redeem</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rewardCard}
                onPress={() =>
                  navigation.navigate('Redeem', {
                    title: 'Free Stock Trade',
                    expiry: 'Apr 15, 2026',
                  })
                }
              >
                <Text style={styles.rewardTitle}>Free Stock Trade</Text>
                <Text style={styles.rewardSubtitle}>800 points</Text>
                <Text style={styles.rewardAction}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
