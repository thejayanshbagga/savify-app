import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SaveScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTranslation from '../hooks/useTranslations';


export default function SaveScreen() {

    const t = useTranslation();

    const breakdownData = [
    {
        id: '1',
        category: t.food,
        amount: '$321.24',
        roundup: '$28.76',
        icon: 'pizza-outline',
        progress: 0.54,
        color: '#A78BFA',
    },
    {
        id: '2',
        category: t.travel,
        amount: '$230.79',
        roundup: '$19.21',
        icon: 'airplane-outline',
        progress: 0.38,
        color: '#22D3EE',
    },
];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#5C8EDC' }}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.monthText}>{t.saveMonthLabel} ▾</Text>
                    <Text style={styles.totalSaved}>$47.97</Text>
                </View>

                {/* June’s Savings Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{t.juneSavings}</Text>
                    <View style={styles.cardRow}>
                        <View>
                            <Text style={styles.cardLabel}>{t.roundUp}</Text>
                            <Text style={styles.cardValue}>$47.97</Text>
                        </View>
                        <View>
                            <Text style={styles.cardLabel}>{t.totalSpending}</Text>
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
                        <Text style={styles.cardTitle}>{t.breakdown}</Text>
                        <Text style={styles.cardValue}>$600</Text>
                    </View>

                    {breakdownData.map(item => (
                        <View key={item.id} style={styles.breakdownItem}>
                            <View style={styles.cardRow}>
                                <Ionicons name={item.icon} size={20} color="#6B7280" />
                                <Text style={styles.breakdownLabel}>{item.category}</Text>
                                <Text style={styles.cardValue}>{item.amount}</Text>
                            </View>
                            <Text style={styles.roundupText}>{t.roundUp} {item.roundup}</Text>
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
