import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'green'
    },
    input: {
        border: '1px solid black',
        backgroundColor: '#eaac8b',
        color: 'white',
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        padding: '5px',
    },
    btn: {
        marginLeft: '20px',
        backgroundColor: 'gray',
        padding: '10px',
        color: 'white',
        borderRadius: '5px'
    },
    item: {
        padding: '10px',
        backgroundColor: '#e56b6f',
        color: 'white',
        margin: '5px',
        alignSelf: 'stretch'
    },
    list: {
        width: '100%',
        flexGrow: 0,
    },
    modalTitle: {
        fontSize: 40,
        backgroundColor: 'gray',
        padding: 30
    },
    modalTitleText: {
        color: 'white'
    },
    modalMessage: {
        fontSize: 20

    },

    modalButton: {
        marginLeft: '20px',
        backgroundColor: '#2296F3',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '20px'
    },
    modalItem: {
        padding: '10px',
        textAlign: 'center',
        fontSize: 40
    },
    modalButtonText: {
        color: 'white'
    },
    white: {
        color: 'white'
    }

});

export default styles;