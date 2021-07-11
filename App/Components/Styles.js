import {StyleSheet} from 'react-native'
export default Styles = StyleSheet.create({

    UserSection:{
        height:130,
        width: '92%',
        backgroundColor: '#ccc',
        padding: 15,
        margin:15,
        borderWidth: 0,
        borderRadius:10,
    },
    UserSectionText:{
        paddingTop: 10,
        fontSize: 16,
    },
    loaderView:{
        flex:1,
        justifyContent: "center"
    },
    logo: {
        width:'100%',
        height: '100%',

    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
    marginBottom: 15,
        textAlign: "center"
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        width:50,
        height:50,

    },

})