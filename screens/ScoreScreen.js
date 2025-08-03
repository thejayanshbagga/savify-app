import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/ScoreScreen.styles';
import BackgroundBlob from '../components/BackgroundBlob';

export default function ScoreScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#5C8EDC' }}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {/* Score Badge */}
                <View style={styles.scoreContainer}>
                    <BackgroundBlob>
                        <Text style={styles.scoreLabel}>Savify Score</Text>
                        <Text style={styles.scoreValue}>3280</Text>
                        <TouchableOpacity
                            style={styles.redeemButton}
                            onPress={() => navigation.navigate('Redeem')}
                        >
                            <Text style={styles.redeemText}>Redeem</Text>
                        </TouchableOpacity>
                    </BackgroundBlob>
                </View>

                {/* Rewards Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Get rewarded</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={232} // 220 width + 12 margin
                        decelerationRate="fast"
                        contentContainerStyle={styles.rewardsRow}
                    >
                        <View style={styles.rewardCard}>
                            <Text style={styles.rewardTitle}>Caramel Frappucino Large</Text>
                            <Text style={styles.rewardSubtitle}>Ends on 31 Nov 2025</Text>
                            <Text style={styles.rewardAction}>Claim Voucher</Text>
                        </View>

                        <View style={styles.rewardCard}>
                            <Text style={styles.rewardTitle}>Strive Chocolate</Text>
                            <Text style={styles.rewardSubtitle}>Ends on 21 Jan 2025</Text>
                            <Text style={styles.rewardAction}>Claim Voucher</Text>
                        </View>

                        {/* Add more cards as needed */}
                    </ScrollView>
                </View>

                {/* Challenges Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Savings challenges</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={112} // 100 block + 12 margin
                        decelerationRate="fast"
                        contentContainerStyle={styles.challengesRow}
                    >
                        {[1, 2, 3, 4, 5].map((id) => (
                            <View key={id} style={styles.challengeBlock} />
                        ))}
                    </ScrollView>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}
