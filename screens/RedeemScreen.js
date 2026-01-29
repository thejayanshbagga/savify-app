import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useTranslation from '../hooks/useTranslations';
import useTheme from '../hooks/useTheme';
import createStyles from '../styles/RedeemScreen.styles';

export default function RedeemScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { title, expiry } = route.params || {};
    const t = useTranslation();
    const { palette } = useTheme();
    const styles = createStyles(palette);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={styles.backButton}
                activeOpacity={0.7}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="chevron-back" size={20} color={palette.accent} />
                    <Text style={styles.backText}>{t.back || 'Back'}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>{title || 'Reward'}</Text>
                <Text style={styles.rewardMeta}>
                    {t.validUntil || 'Valid until'} {expiry || 'N/A'}
                </Text>

                <View style={styles.rewardCard}>
                    <Text style={styles.rewardTitle}>
                        {t.redeemInstructions || 'Follow the instructions below to redeem your reward.'}
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.redeemButton}
                    onPress={() => {
                        // Add redeem logic here
                        navigation.goBack();
                    }}
                >
                    <Text style={styles.redeemText}>
                        {t.redeemNow || 'Redeem Now'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}