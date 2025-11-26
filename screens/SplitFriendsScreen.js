import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SplitFriends.styles';
import useTranslation from '../hooks/useTranslations';

// Enable animation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function FriendsTab() {
  const t = useTranslation();

  // Main fake friend data
  const [friends, setFriends] = useState([
    { id: '1', name: 'Saeedah Baksh', amount: 50, owesYou: false },
    { id: '2', name: 'Nabeel Shaikh', amount: 100, owesYou: true },
    { id: '3', name: 'Adit Bhimani', amount: 50, owesYou: true },
    { id: '4', name: 'Shriya Joshi', amount: 25, owesYou: false },
    { id: '5', name: 'Vaishnavi Gudimella', amount: 150, owesYou: false },
    { id: '6', name: 'Jayansh Bagga', amount: 34, owesYou: false },
    { id: '7', name: 'Param Pratap Singh', amount: 75, owesYou: true },
  ]);

  // Fake activity log
  const [activity, setActivity] = useState([
    { id: 'a1', icon: 'fast-food-outline', title: t.activity1Title, subtitle: t.activity1Subtitle },
    { id: 'a2', icon: 'film-outline', title: t.activity2Title, subtitle: t.activity2Subtitle },
    { id: 'a3', icon: 'people-outline', title: t.activity3Title, subtitle: t.activity3Subtitle },
    { id: 'a4', icon: 'cash-outline', title: t.activity4Title, subtitle: t.activity4Subtitle },
  ]);

  const [selectedTab, setSelectedTab] = useState('friends');
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  // Apply filters
  const filteredFriends = friends.filter(f => {
    if (filter === 'owesYou') return f.owesYou;
    if (filter === 'youOwe') return !f.owesYou;
    return true;
  });

  // Settle up: zero amount and update state
  const handleSettle = (id) => {
    LayoutAnimation.easeInEaseOut();
    setFriends(prev =>
      prev.map(f =>
        f.id === id ? { ...f, amount: 0, owesYou: false } : f
      )
    );

    const friend = friends.find(f => f.id === id);

    setActivity(prev => [
      {
        id: Date.now().toString(),
        icon: 'cash-outline',
        title: `You settled with ${friend.name}`,
        subtitle: `You paid $${friend.amount}`,
      },
      ...prev,
    ]);
  };

  // Fake add expense
  const addFakeExpense = () => {
    const randomFriend = friends[Math.floor(Math.random() * friends.length)];
    const addedAmount = Math.floor(Math.random() * 40 + 10);

    LayoutAnimation.easeInEaseOut();
    setFriends(prev =>
      prev.map(f =>
        f.id === randomFriend.id
          ? { ...f, amount: f.amount + addedAmount, owesYou: true }
          : f
      )
    );

    setActivity(prev => [
      {
        id: Date.now().toString(),
        icon: 'receipt-outline',
        title: `You added an expense`,
        subtitle: `${randomFriend.name} owes you $${addedAmount}`,
      },
      ...prev,
    ]);
  };

  const renderFriend = ({ item }) => {
    const initials = item.name.charAt(0);
    const amountColor = item.owesYou ? 'green' : 'red';
    const labelText = item.owesYou ? t.owesYou : t.youOwe;

    return (
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setExpanded(expanded === item.id ? null : item.id);
        }}
        style={{ overflow: 'hidden' }}
      >
        <View style={styles.friendCard}>
          <View style={[styles.avatar, { borderColor: amountColor }]}>
            <Text style={[styles.avatarText, { color: amountColor }]}>{initials}</Text>
          </View>

          <View style={styles.friendDetails}>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={[styles.statusText, { color: amountColor }]}>{labelText}</Text>
          </View>

          <Text style={styles.amountText}>${item.amount}</Text>
        </View>

        {expanded === item.id && (
          <View style={styles.expandedCard}>
            <Text style={styles.expandedText}>Last activity: Paid for food</Text>
            <Text style={styles.expandedText}>Most recent split: $12</Text>
            <TouchableOpacity
              onPress={() => handleSettle(item.id)}
              style={styles.settleButton}
            >
              <Text style={styles.settleButtonText}>Settle Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
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

        {/* Top Profile */}
        <View style={styles.topCard}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>TD</Text>
          </View>
          <Text style={styles.profileName}>Test Dummy</Text>
          <View style={styles.balanceCard}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>{t.youAreOwed}</Text>
              <Text style={styles.balanceValue}>
                {friends.filter(f => f.owesYou).reduce((acc, f) => acc + f.amount, 0)}
              </Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>{t.youOwe}</Text>
              <Text style={styles.balanceValue}>
                {friends.filter(f => !f.owesYou).reduce((acc, f) => acc + f.amount, 0)}
              </Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>{t.totalBalance}</Text>
              <Text style={styles.balanceValue}>
                {
                  friends.reduce(
                    (acc, f) => acc + (f.owesYou ? f.amount : -f.amount),
                    0
                  )
                }
              </Text>
            </View>
          </View>
        </View>

        {/* Tab Switch */}
        <View style={styles.tabSwitch}>
          <TouchableOpacity onPress={() => setSelectedTab('friends')}>
            <Text style={[styles.tabText, selectedTab === 'friends' && styles.activeTab]}>
              {t.friendsTab}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('activity')}>
            <Text style={[styles.tabText, selectedTab === 'activity' && styles.activeTab]}>
              {t.activityTab}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filters */}
        {selectedTab === 'friends' && (
          <View style={styles.filterContainer}>
            <TouchableOpacity 
            onPress={() => setFilter('all')} style={[styles.filterPill, filter === 'all' && styles.filterPillActive]}>
              <Text style={[styles.filterPillText, filter === 'all' && styles.filterPillTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('owesYou')} style={[styles.filterPill, filter === 'owesYou' && styles.filterPillActive]}>
              <Text style={[styles.filterPillText, filter === 'owesYou' && styles.filterPillTextActive]}>Owes You</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('youOwe')} style={[styles.filterPill, filter === 'youOwe' && styles.filterPillActive]}>
              <Text style={[styles.filterPillText, filter === 'youOwe' && styles.filterPillTextActive]} >You Owe</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Add expense
        {selectedTab === 'friends' && (
          <TouchableOpacity onPress={addFakeExpense} style={styles.addExpenseButton}>
            <Text style={styles.addExpenseButtonText}>Add Fake Expense</Text>
          </TouchableOpacity>
        )} */}

        {/* Friends / Activity List */}
        {selectedTab === 'friends' && (
          <FlatList
            data={filteredFriends}
            renderItem={renderFriend}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.friendList}
          />
        )}

        {selectedTab === 'activity' && (
          <FlatList
            data={activity}
            renderItem={renderActivity}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.activityList}
          />
        )}

      </View>
    </View>
  );
}
