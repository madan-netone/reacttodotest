import { StyleSheet } from "react-native";


export const styleSheet = StyleSheet.create({


    container: {
        height: '100%',
        padding: 15,
        position: 'relative',




    },
    heading: {
        fontSize: 20,

        color: '#fff',
        textAlign: 'center'
    },
    topBar: {
        padding: 20,
        width: '100%',

        backgroundColor: 'green',
        borderRadius: '0 0 20px 20px'

    },
    titleBar: {
        position: 'relative',
        padding: 10,
        flex: 1
    },

    filterBtn: {
        position: 'absolute',
        right: 10,
        top: -20,
        backgroundColor: '#fff',
        width: 100,

        padding: 5
    },
    filterTitle: {
        color: 'green',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400'
    },
    footerBox: {
        width: '100%',
        padding: 10,
        height: 50,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        left: 0,
        borderRadius: 25,

    },

    listBox: {
        minHeight: 600,
        marginTop: 20

    },

    listItem: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 20
    },

    footerBtn: {
        backgroundColor: 'green',
        borderRadius: 25,
        width: '100%',
        padding: 10,
        textAlign: 'center',


    },

    addBtn: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: '600'
    },

    modalHeding: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    inputBox: {
        padding: 20,
        marginTop: 20,
        marginBottom: 20
    },

    addModal: {
        width: 400,
        height: 'auto',
        minHeight: 400,
        borderRadius: 20,
        padding: 20
    },

    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20

    },

    bottomCard: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,

    }

})