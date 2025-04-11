import { StyleSheet } from "react-native";
export const stylesSettings = StyleSheet.create({
    ContainerSettings:{
        flex: 1,
        backgroundColor: "#111",
        alignItems: "center",
    },
    ContainerMain: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    ContainerTitle: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        width: '100%',
        height: '5%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textTitle: {
        color: '#eee',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 2
    },
    ImageTitle: {
        width: 35,
        height: 35,
        resizeMode: 'cover'
    },
    ContainerOptions: {
        
        width: '100%',
        height: '95%',
        alignItems: 'center',
        padding: 10,
        gap: 10
    },
    ContainerImage: {
        
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15
    },
    ImageContainer: {
        borderColor: '#ddaa',
        borderWidth: 1,
        width: '50%',
        height: '65%',
        borderRadius: 120
    },
    TextImage: {
        color: '#eee',
        width: '50%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1,
    },
    ContainerPressable: {
        borderColor: '#999',
        borderWidth: 1,
        width: '100%',
        height: '11%',
        paddingHorizontal: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textPressable: {
        color: '#eee',
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: 1
    },
    ImagePressable: {
        width: 50,
        height: 50,
        resizeMode: 'cover'
    }
    
})