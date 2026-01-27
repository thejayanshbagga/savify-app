import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../hooks/useTheme';
import createStyles from '../styles/SplitFriends.styles';
import useTranslation from '../hooks/useTranslations';

// Enable animation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function FriendsTab() {
  const t = useTranslation();
  const { palette } = useTheme();
  const styles = createStyles(palette);


  // Main fake friend data
  const [friends, setFriends] = useState([
    { id: '1', name: 'Saeedah Baksh', amount: 50, owesYou: false },
    { id: '2', name: 'Nabeel Shaikh', amount: 100, owesYou: true },
    { id: '3', name: 'Adit Bhimani', amount: 50, owesYou: true },
    { id: '4', name: 'Shriya Joshi', amount: 25, owesYou: false },
    { id: '5', name: 'Vaishnavi Gudimella', amount: 150, owesYou: false },
    { id: '6', name: 'John Doe', amount: 34, owesYou: false },
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

  const renderFriend = ({ item }) => {
    const initials = item.name.split(' ').map(n => n[0]).join('');
    const amountColor = item.owesYou ? '#10B981' : '#EF4444';
    const labelText = item.owesYou ? t.owesYou : t.youOwe;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setExpanded(expanded === item.id ? null : item.id);
          }}
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
        </TouchableOpacity>

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
      </View>
    );
  };

  const renderActivity = ({ item }) => (
    <View style={styles.activityCard}>
      <View style={styles.activityIconContainer}>
        <Ionicons name={item.icon} size={24} style={styles.activityIcon} />
      </View>
      <View style={styles.activityText}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyStateIcon}>
        <Ionicons name="people-outline" size={64} color="#D8DEE9" />
      </View>
      <Text style={styles.emptyStateText}>No friends to show</Text>
      <Text style={styles.emptyStateSubtext}>
        Add expenses with friends to see them here
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.background }} edges={['top']}>
      <View style={styles.container}>

        {/* Top Profile */}
        <View style={styles.topCard}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>JB</Text>
          </View>
          <Text style={styles.profileName}>Jayansh Bagga</Text>
          <View style={styles.balanceCard}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>{t.youAreOwed}</Text>
              <Text style={styles.balanceValue}>
                ${friends.filter(f => f.owesYou).reduce((acc, f) => acc + f.amount, 0)}
              </Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>{t.youOwe}</Text>
              <Text style={styles.balanceValue}>
                ${friends.filter(f => !f.owesYou).reduce((acc, f) => acc + f.amount, 0)}
              </Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>{t.totalBalance}</Text>
              <Text style={[
                styles.balanceValue,
                { color: friends.reduce((acc, f) => acc + (f.owesYou ? f.amount : -f.amount), 0) >= 0 ? '#10B981' : '#EF4444' }
              ]}>
                ${Math.abs(friends.reduce((acc, f) => acc + (f.owesYou ? f.amount : -f.amount), 0))}
              </Text>
            </View>
          </View>
        </View>

        {/* Tab Switch */}
        <View style={styles.tabSwitch}>
          <TouchableOpacity onPress={() => setSelectedTab('friends')}>
            <Text style={[styles.tabText, selectedTab === 'friends' && styles.activeTab]}>
              {t.friendsTab || 'Friends'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('activity')}>
            <Text style={[styles.tabText, selectedTab === 'activity' && styles.activeTab]}>
              {t.activityTab || 'Activity'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filters */}
        {selectedTab === 'friends' && (
          <View style={styles.filterContainer}>
            <TouchableOpacity 
              onPress={() => setFilter('all')} 
              style={[styles.filterPill, filter === 'all' && styles.filterPillActive]}
            >
              <Text style={[styles.filterPillText, filter === 'all' && styles.filterPillTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setFilter('owesYou')} 
              style={[styles.filterPill, filter === 'owesYou' && styles.filterPillActive]}
            >
              <Text style={[styles.filterPillText, filter === 'owesYou' && styles.filterPillTextActive]}>Owes You</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setFilter('youOwe')} 
              style={[styles.filterPill, filter === 'youOwe' && styles.filterPillActive]}
            >
              <Text style={[styles.filterPillText, filter === 'youOwe' && styles.filterPillTextActive]}>You Owe</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Friends / Activity List */}
        {selectedTab === 'friends' && (
          <View style={{ flex: 1 }}>
          <FlatList
            data={filteredFriends}
            renderItem={renderFriend}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.friendList}
            ListEmptyComponent={renderEmptyState}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
          />
          </View>
        )}

        {selectedTab === 'activity' && (
          <FlatList
            data={activity}
            renderItem={renderActivity}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.activityList}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
          />
        )}

      </View>
    </SafeAreaView>
  );
}