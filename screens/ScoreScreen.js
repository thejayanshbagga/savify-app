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
                    </BackgroundBlob>
                </View>

                {/* Rewards Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Get rewarded</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={232}
                        decelerationRate="fast"
                        contentContainerStyle={styles.rewardsRow}
                    >
                        <TouchableOpacity
                            style={styles.rewardCard}
                            onPress={() => navigation.navigate('Redeem', {
                                title: 'Large Caramel Frappucino',
                                expiry: 'November 31st, 2025',
                            })}
                        >
                            <Text style={styles.rewardTitle}>Large Caramel Frappucino</Text>
                            <Text style={styles.rewardSubtitle}>Ends on November 31st, 2025</Text>
                            <Text style={styles.rewardAction}>Claim Voucher</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rewardCard}
                            onPress={() => navigation.navigate('Redeem', {
                                title: 'Strive Chocolate',
                                expiry: 'January 21st, 2025',
                            })}
                        >
                            <Text style={styles.rewardTitle}>Strive Chocolate</Text>
                            <Text style={styles.rewardSubtitle}>Ends on January 21st, 2025</Text>
                            <Text style={styles.rewardAction}>Claim Voucher</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rewardCard}
                            onPress={() => navigation.navigate('Redeem', {
                                title: 'Free Energy Drink',
                                expiry: 'December 10th, 2025',
                            })}
                        >
                            <Text style={styles.rewardTitle}>Free Energy Drink</Text>
                            <Text style={styles.rewardSubtitle}>Ends on December 10th, 2025</Text>
                            <Text style={styles.rewardAction}>Claim Voucher</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* Challenges Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Savings challenges</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={112}
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

