import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function RedeemScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { title, expiry } = route.params || {};

    return (
        <SafeAreaView style={tw`flex-1 bg-white p-5`}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-5`}>
                <Text style={tw`text-blue-500`}>&larr; Back</Text>
            </TouchableOpacity>

            <View style={tw`items-center mt-10`}>
                <Text style={tw`text-2xl font-bold text-center mb-3`}>{title}</Text>
                <Text style={tw`text-gray-500 text-base mb-8`}>Valid until {expiry}</Text>

                <View style={tw`bg-blue-100 rounded-xl px-6 py-4`}>
                    <Text style={tw`text-blue-700 text-lg font-semibold`}>
                        Show this voucher at checkout to redeem your reward.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
