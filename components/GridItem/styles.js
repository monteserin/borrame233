import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 0,
    },
    title: {
        color: 'white'
    }
});

export default styles;