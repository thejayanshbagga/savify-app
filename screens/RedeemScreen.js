import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
                <Text style={{ color: palette.textPrimary }}>&larr; {t.back}</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.rewardMeta}>{t.validUntil} {expiry}</Text>

                <View style={styles.rewardCard}>
                    <Text style={styles.rewardTitle}>
                        {t.redeemInstructions}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
