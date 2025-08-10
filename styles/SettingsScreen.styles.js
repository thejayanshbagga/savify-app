import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6E3FF',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    pageLabel: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        color: '#243B55',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#243B55',
        marginTop: 0,
        marginBottom: 12,
    },
    // Spacer "div" to separate sections
    sectionSpacer: {
        height: 16,
    },
    optionsCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingTop: 2,         // top padding only
        paddingHorizontal: 10,
        elevation: 4,           // Android shadow
        shadowColor: '#000',    // iOS shadow
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    lastOptionRow: {
        borderBottomWidth: 0,
        paddingBottom: 18,
    },
    iconLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textBlock: {
        marginLeft: 12,
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    subtext: {
        fontSize: 13,
        color: '#999',
        marginTop: 2,
    },
});
