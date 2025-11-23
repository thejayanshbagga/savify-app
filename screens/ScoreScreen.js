import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ScoreScreen.styles';
import BackgroundBlob from '../components/BackgroundBlob';
import useTranslation from '../hooks/useTranslations';

export default function ScoreScreen() {
    const navigation = useNavigation();
    const t = useTranslation();
    const [score, setScore] = useState(0);


    useEffect(() => {
    const fetchScore = async () => {
        try {
            console.log("API URL:", process.env.EXPO_PUBLIC_API_URL);
            console.log("Fetching score...");

            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/scores/testUser`);
            console.log("Response status:", response.status);

            const data = await response.json();
            console.log("Fetched data:", data);

            const scoreValue = Array.isArray(data) ? data[0]?.score : data?.score;

            if (scoreValue !== undefined) {
                setScore(scoreValue);
            } else {
                console.warn("No score found in API response");
            }

        } catch (error) {
            console.error("Error fetching score:", error);
        }
    };

    fetchScore();
}, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#5C8EDC' }}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.scoreContainer}>
                    <BackgroundBlob>
                        <Text style={styles.scoreLabel}>{t.savifyScore}</Text>
                        <Text style={styles.scoreValue}>
                            {score !== 0 ? score : 'Loading...'}
                        </Text>
                    </BackgroundBlob>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
