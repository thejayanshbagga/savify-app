import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import useTranslation from '../hooks/useTranslations';

export default function RedeemScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { title, expiry } = route.params || {};
    const t = useTranslation();

    return (
        <SafeAreaView style={tw`flex-1 bg-white p-5`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-5`}>
                <Text style={tw`text-blue-500`}>&larr; {t.back}</Text>
            </TouchableOpacity>

            <View style={tw`items-center mt-10`}>
                <Text style={tw`text-2xl font-bold text-center mb-3`}>{title}</Text>
                <Text style={tw`text-gray-500 text-base mb-8`}>{t.validUntil} {expiry}</Text>

                <View style={tw`bg-blue-100 rounded-xl px-6 py-4`}>
                    <Text style={tw`text-blue-700 text-lg font-semibold`}>
                        {t.redeemInstructions}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
