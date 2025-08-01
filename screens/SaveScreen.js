import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SaveScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const breakdownData = [
    {
        id: '1',
        category: 'Food',
        amount: '$321.24',
        roundup: '$28.76',
        icon: 'pizza-outline',
        progress: 0.54,
        color: '#A78BFA',
    },
    {
        id: '2',
        category: 'Travel',
        amount: '$230.79',
        roundup: '$19.21',
        icon: 'airplane-outline',
        progress: 0.38,
        color: '#22D3EE',
    },
];

export default function SaveScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#5C8EDC' }}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.monthText}>June 2025 ▾</Text>
                    <Text style={styles.totalSaved}>$47.97</Text>
                </View>

                {/* June’s Savings Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>June’s Savings</Text>
                    <View style={styles.cardRow}>
                        <View>
                            <Text style={styles.cardLabel}>Round-Up</Text>
                            <Text style={styles.cardValue}>$47.97</Text>
                        </View>
                        <View>
                            <Text style={styles.cardLabel}>Total Spending</Text>
                            <Text style={styles.cardValue}>$600</Text>
                        </View>
                    </View>
                    <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFg, { width: '8%' }]} />
                    </View>
                </View>

                {/* Breakdown Card */}
                <View style={styles.card}>
                    <View style={styles.cardRow}>
                        <Ionicons name="calendar-outline" size={20} color="#FF647C" />
                        <Text style={styles.cardTitle}>Breakdown</Text>
                        <Text style={styles.cardValue}>$600</Text>
                    </View>

                    {breakdownData.map(item => (
                        <View key={item.id} style={styles.breakdownItem}>
                            <View style={styles.cardRow}>
                                <Ionicons name={item.icon} size={20} color="#6B7280" />
                                <Text style={styles.breakdownLabel}>{item.category}</Text>
                                <Text style={styles.cardValue}>{item.amount}</Text>
                            </View>
                            <Text style={styles.roundupText}>Round Up {item.roundup}</Text>
                            <View style={styles.progressBarBg}>
                                <View
                                    style={[
                                        styles.progressBarFg,
                                        { width: `${item.progress * 100}%`, backgroundColor: item.color },
                                    ]}
                                />
                            </View>
                        </View>
                    ))}
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}
