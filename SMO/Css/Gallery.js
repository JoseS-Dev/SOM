import {StyleSheet } from "react-native";
export const StylesGallery = StyleSheet.create({
    ContainerGallery:{
        flex: 1,
        backgroundColor: '#111',
        padding: 5,
        alignItems: 'center'
    },
    ContainerMain: {
        width: '100%',
        height: '100%',
        borderColor: '#aaa',
        borderWidth: 1,
    },
    ContainerGalleryHeader:{
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        width: '100%',
        height: '5%',
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextGallery:{
        fontSize: 18,
        fontWeight: '500',
        color: '#eee',
        letterSpacing: 2
    },
    ImageHeader: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    ContainerImage: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        
    },
    ImageContainer: {
        borderColor: '#ddaa',
        borderWidth: 1,
        borderRadius: 10,
        width: '45%',
        height: '85%',
        resizeMode: 'cover'
    },
    ButtonImage: {
        borderColor: '#ddaa',
        borderWidth: 1,
        width: '45%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#222',

    },
    textImage: {
        fontSize: 13,
        fontWeight: '500',
        color: '#eee',

    },
    ModalContainer: {
        borderColor: '#aaa',
        borderWidth: 1,
        flex: 1,
        width: '100%',
        backgroundColor: '#111',
        alignItems: 'center',
        padding: 5,
        gap: 105
    },
    ContainerModalImagen: {
        borderColor: '#ddaa',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: '65%'
    },
    ModalImage: {
        width: '100%',
        height: '100%'
    },
    ModalButton: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '40%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#222',
    },
    ModalText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#eee',
        letterSpacing: 1,
    }

})