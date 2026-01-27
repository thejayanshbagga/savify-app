import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import createStyles from '../styles/SaveScreen.styles';
import useTheme from '../hooks/useTheme';
import useTranslation from '../hooks/useTranslations';

export default function SaveScreen() {
    const t = useTranslation();
    const navigation = useNavigation();
    const { palette } = useTheme();
    const styles = createStyles(palette);

    const fakeMonths = {
        June: {
            totalSaved: 47.97,
            totalSpending: 600,
            progress: 0.08,
            breakdown: [
                { category: t.food, amount: 321.24, roundup: 28.76, progress: 0.54, icon: "pizza-outline", color: "#4A6FA5" },
                { category: t.travel, amount: 230.79, roundup: 19.21, progress: 0.38, icon: "airplane-outline", color: "#4A6FA5" },
            ]
        },
        July: {
            totalSaved: 66.47,
            totalSpending: 720,
            progress: 0.09,
            breakdown: [
                { category: t.food, amount: 280, roundup: 31, progress: 0.49, icon: "pizza-outline", color: "#4A6FA5" },
                { category: t.shopping, amount: 150, roundup: 15, progress: 0.25, icon: "bag-outline", color: "#4A6FA5" },
            ]
        },
        August: {
            totalSaved: 32.57,
            totalSpending: 540,
            progress: 0.06,
            breakdown: [
                { category: t.travel, amount: 190, roundup: 12, progress: 0.35, icon: "airplane-outline", color: "#4A6FA5" },
            ]
        }
    };

    const [selectedMonth, setSelectedMonth] = useState("June");
    const [showPicker, setShowPicker] = useState(false);

    const data = fakeMonths[selectedMonth];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: palette.background }}>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
                        <Text style={styles.monthText}>{selectedMonth} ▾</Text>
                    </TouchableOpacity>

                    {showPicker && (
                        <View style={styles.dropdown}>
                            {Object.keys(fakeMonths).map(month => (
                                <TouchableOpacity
                                    key={month}
                                    style={styles.dropdownItem}
                                    onPress={() => { setSelectedMonth(month); setShowPicker(false); }}
                                >
                                    <Text style={styles.dropdownItemText}>{month}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    <Text style={styles.totalSaved}>${data.totalSaved}</Text>
                </View>

                {/* Investment Button */}
                <TouchableOpacity 
                    style={styles.investmentButton}
                    onPress={() => navigation.navigate('InvestmentDashboard')}
                >
                    <View style={styles.investmentButtonContent}>
                        <View style={styles.investmentButtonLeft}>
                            <View style={styles.iconWrapper}>
                            <Ionicons name="trending-up" size={20} color={palette.textPrimaryr} />
                            </View>
                            <View style={styles.investmentButtonText}>
                                <Text style={styles.investmentButtonTitle}>Investment Portfolio</Text>
                                <Text style={styles.investmentButtonSubtitle}>Manage your investments</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={palette.onAccent} />
                    </View>
                </TouchableOpacity>

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
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{marginTop: 2}}>
                                <Ionicons name="calendar-outline" size={20} color={palette.textPrimary} />
                            </View>
                            <Text style={styles.cardTitle}>{t.breakdown}</Text>
                        </View>
                        <Text style={styles.cardValue}>${data.totalSpending}</Text>
                    </View>

                    {data.breakdown.map((item, index) => (
                        <View key={index} style={styles.breakdownItem}>
                            <View style={styles.cardRow}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name={item.icon} size={20} color={palette.accent} />
                                    <Text style={styles.breakdownLabel}>{item.category}</Text>
                                </View>
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

                {/* Bottom spacing for tab bar */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}