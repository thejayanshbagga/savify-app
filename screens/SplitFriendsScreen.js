import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SplitFriends.styles';

const friendsData = [
  { id: '1', name: 'Saeedah Baksh', amount: 50, owesYou: false },
  { id: '2', name: 'Nabeel Shaikh', amount: 100, owesYou: true },
  { id: '3', name: 'Adit Bhimani', amount: 50, owesYou: true },
  { id: '4', name: 'Shriya Joshi', amount: 25, owesYou: false },
  { id: '5', name: 'Vaishnavi Gudimella', amount: 150, owesYou: false },
  { id: '6', name: 'Jayansh Bagga', amount: 34, owesYou: false },
];

const activityData = [
  {
    id: 'a1',
    icon: 'fast-food-outline',
    title: 'You added "Fries"',
    subtitle: 'Nabeel owes you',
  },
  {
    id: 'a2',
    icon: 'film-outline',
    title: 'Nabeel added "Movies"',
    subtitle: 'You owe Nabeel',
  },
  {
    id: 'a3',
    icon: 'people-outline',
    title: 'Saeedah added "Savify Trek"',
    subtitle: 'You, Nabeel, Adit, Shriya owe Saeedah',
  },
  {
    id: 'a4',
    icon: 'cash-outline',
    title: 'You settled up with Shriya',
    subtitle: 'You paid $10',
  },
];

export default function FriendsTab({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('Friends');

  const renderFriend = ({ item }) => {
    const initials = item.name.charAt(0);
    const amountColor = item.owesYou ? 'green' : 'red';
    const labelText = item.owesYou ? 'owes you' : 'You owe';

    return (
      <View style={styles.friendCard}>
        <View style={[styles.avatar, { borderColor: amountColor }]}>
          <Text style={[styles.avatarText, { color: amountColor }]}>{initials}</Text>
        </View>
        <View style={styles.friendDetails}>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={[styles.statusText, { color: amountColor }]}>{labelText}</Text>
        </View>
        <Text style={styles.amountText}>{item.amount}</Text>
      </View>
    );
  };

  const renderActivity = ({ item }) => (
  <View style={styles.activityCard}>
    <Ionicons name={item.icon} size={24} style={styles.activityIcon} />
    <View style={styles.activityText}>
      <Text style={styles.activityTitle}>{item.title}</Text>
      <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
    </View>
  </View>
  );


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        {/* Top Profile Card */}
        <View style={styles.topCard}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>TD</Text>
          </View>
          <Text style={styles.profileName}>Test Dummy</Text>
          <View style={styles.balanceCard}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>You are owed</Text>
              <Text style={styles.balanceValue}>150</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>You owe</Text>
              <Text style={styles.balanceValue}>75</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>Total Balance</Text>
              <Text style={styles.balanceValue}>+75</Text>
            </View>
          </View>
        </View>

        {/* Tab Switch */}
        <View style={styles.tabSwitch}>
          {['Friends', 'Activity'].map(tab => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
              <Text style={[styles.tabText, selectedTab === tab && styles.activeTab]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Friends List */}
        {selectedTab === 'Friends' && (
          <FlatList
            data={friendsData}
            renderItem={renderFriend}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.friendList}
          />
        )}
        {selectedTab === 'Activity' && (
          <FlatList
            data={activityData}
            renderItem={renderActivity}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.activityList}
          />
        )}
      </View>
    </View>
  );
}
