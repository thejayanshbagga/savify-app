import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5C8EDC',
        paddingHorizontal: 16,
        paddingTop: 48,
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
        // paddingTop: 12,
    },
    monthText: {
        color: '#E5E7EB',
        fontSize: 16,
    },
    totalSaved: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: 'bold',
        marginTop: 8,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    cardLabel: {
        color: '#6B7280',
        fontSize: 12,
    },
    cardValue: {
        color: '#111827',
        fontSize: 16,
        fontWeight: '600',
    },
    progressBarBg: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressBarFg: {
        height: '100%',
        borderRadius: 4,
    },
    breakdownItem: {
        marginBottom: 16,
    },
    breakdownLabel: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 14,
    },
    roundupText: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 4,
    },
});
