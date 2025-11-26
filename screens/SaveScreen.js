import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SaveScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTranslation from '../hooks/useTranslations';

export default function SaveScreen() {

    const t = useTranslation();

    // Fake dynamic data for months
    const fakeMonths = {
        June: {
            totalSaved: 47.97,
            totalSpending: 600,
            progress: 0.08,
            breakdown: [
                { category: t.food, amount: 321.24, roundup: 28.76, progress: 0.54, icon: "pizza-outline", color: "#A78BFA" },
                { category: t.travel, amount: 230.79, roundup: 19.21, progress: 0.38, icon: "airplane-outline", color: "#22D3EE" },
            ]
        },
        July: {
            totalSaved: 66.47,
            totalSpending: 720,
            progress: 0.09,
            breakdown: [
                { category: t.food, amount: 280, roundup: 31, progress: 0.49, icon: "pizza-outline", color: "#A78BFA" },
                { category: t.shopping, amount: 150, roundup: 15, progress: 0.25, icon: "bag-outline", color: "#FB923C" },
            ]
        },
        August: {
            totalSaved: 32.50,
            totalSpending: 540,
            progress: 0.06,
            breakdown: [
                { category: t.travel, amount: 190, roundup: 12, progress: 0.35, icon: "airplane-outline", color: "#22D3EE" },
            ]
        }
    };

    const [selectedMonth, setSelectedMonth] = useState("June");
    const [showPicker, setShowPicker] = useState(false);

    const data = fakeMonths[selectedMonth];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#5C8EDC' }}>
            <ScrollView style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    {/* Month Picker */}
                    <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
                        <Text style={styles.monthText}>{selectedMonth} ▾</Text>
                    </TouchableOpacity>

                    {showPicker && (
                        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 8, marginTop: 8 }}>
                            {Object.keys(fakeMonths).map(month => (
                                <TouchableOpacity
                                    key={month}
                                    onPress={() => { setSelectedMonth(month); setShowPicker(false); }}
                                >
                                    <Text style={{ padding: 10 }}>{month}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    {/* Total Saved */}
                    <Text style={styles.totalSaved}>${data.totalSaved}</Text>
                </View>

                {/* Savings Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{selectedMonth} {t.savings}</Text>

                    <View style={styles.cardRow}>
                        <View>
                            <Text style={styles.cardLabel}>{t.roundUp}</Text>
                            <Text style={styles.cardValue}>${data.totalSaved}</Text>
                        </View>
                        <View>
                            <Text style={styles.cardLabel}>{t.totalSpending}</Text>
                            <Text style={styles.cardValue}>${data.totalSpending}</Text>
                        </View>
                    </View>

                    <View style={styles.progressBarBg}>
                        <View
                            style={[
                                styles.progressBarFg,
                                { width: `${data.progress * 100}%` }
                            ]}
                        />
                    </View>
                </View>

                {/* Breakdown Card */}
                <View style={styles.card}>
                    <View style={styles.cardRow}>
                        <Ionicons name="calendar-outline" size={20} color="#FF647C" />
                        <Text style={styles.cardTitle}>{t.breakdown}</Text>
                        <Text style={styles.cardValue}>${data.totalSpending}</Text>
                    </View>

                    {data.breakdown.map((item, index) => (
                        <View key={index} style={styles.breakdownItem}>
                            <View style={styles.cardRow}>
                                <Ionicons name={item.icon} size={20} color="#6B7280" />
                                <Text style={styles.breakdownLabel}>{item.category}</Text>
                                <Text style={styles.cardValue}>${item.amount}</Text>
                            </View>

                            <Text style={styles.roundupText}>
                                {t.roundUp} ${item.roundup}
                            </Text>

                            <View style={styles.progressBarBg}>
                                <View
                                    style={[
                                        styles.progressBarFg,
                                        { width: `${item.progress * 100}%`, backgroundColor: item.color }
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
