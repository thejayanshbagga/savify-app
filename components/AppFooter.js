import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

export default function AppFooter({ navigation }) {
    return (
        <View style={tw`flex-row justify-around py-3 bg-white border-t border-gray-200`}>
            <TouchableOpacity onPress={() => navigation.navigate('SaveScreen')} style={tw`items-center`}>
                <Feather name="dollar-sign" size={20} style={tw`text-blue-600`} />
                <Text style={tw`text-blue-600 text-xs mt-1`}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SplitScreen')} style={tw`items-center`}>
                <Feather name="users" size={20} style={tw`text-gray-600`} />
                <Text style={tw`text-gray-600 text-xs mt-1`}>Split</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ScoreScreen')} style={tw`items-center`}>
                <Feather name="award" size={20} style={tw`text-gray-600`} />
                <Text style={tw`text-gray-600 text-xs mt-1`}>Score</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={tw`items-center`}>
                <Feather name="user" size={20} style={tw`text-gray-600`} />
                <Text style={tw`text-gray-600 text-xs mt-1`}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}
