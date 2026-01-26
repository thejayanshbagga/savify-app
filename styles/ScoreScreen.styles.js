import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    scoreContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    badge: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#F8F9FB',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D8DEE9',
    },
    scoreLabel: {
        fontSize: 13,
        color: '#4A6FA5',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    scoreValue: {
        fontSize: 56,
        fontWeight: '300',
        color: '#162447',
        letterSpacing: -1.5,
    },
    redeemButton: {
        backgroundColor: '#4A6FA5',
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 10,
        marginTop: 20,
    },
    redeemText: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 14,
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 18,
        color: '#162447',
        letterSpacing: -0.3,
    },
    seeAll: {
        color: '#4A6FA5',
        fontSize: 14,
        fontWeight: '400',
    },
    rewardCard: {
        backgroundColor: '#F8F9FB',
        padding: 20,
        borderRadius: 12,
        marginRight: 12,
        width: 220,
        borderWidth: 1,
        borderColor: '#D8DEE9',
    },
    rewardTitle: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 6,
        color: '#162447',
    },
    rewardSubtitle: {
        color: '#8894A6',
        fontSize: 13,
        fontWeight: '400',
    },
    rewardAction: {
        color: '#4A6FA5',
        fontWeight: '500',
        marginTop: 12,
        fontSize: 14,
    },
    challengeBlock: {
        width: 100,
        height: 100,
        backgroundColor: '#F8F9FB',
        borderRadius: 12,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#D8DEE9',
    },
    rewardsRow: {
        flexDirection: 'row',
        paddingHorizontal: 0,
    },
    challengesRow: {
        flexDirection: 'row',
        paddingHorizontal: 0,
    },
});