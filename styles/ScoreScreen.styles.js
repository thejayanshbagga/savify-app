import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5C8EDC',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    scoreContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    badge: {
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#E0ECFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreLabel: {
        fontSize: 16,
        color: '#444',
    },
    scoreValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#111',
        marginVertical: 8,
    },
    redeemButton: {
        backgroundColor: '#000',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginTop: 12,
    },
    redeemText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    seeAll: {
        color: '#555',
        fontSize: 14,
    },
    rewardCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginRight: 12,
        width: 220,
    },
    rewardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
    },
    rewardSubtitle: {
        color: '#888',
        fontSize: 12,
    },
    rewardAction: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 8,
    },
    challengeBlock: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 12,
        marginRight: 12,
    },

    // Updated styles for proper horizontal scroll behavior
    rewardsRow: {
        flexDirection: 'row',
        paddingHorizontal: 4,
    },

    challengesRow: {
        flexDirection: 'row',
        paddingHorizontal: 4,
    },
});
