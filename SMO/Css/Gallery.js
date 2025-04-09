import { StyleSheet } from "react-native";
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
        alignItems: 'center',
    },
    ContainerGalleryHeader:{
        borderColor: '#fff',
        borderWidth: 2,
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
    ContainerImages: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    ContainerImage: {
        width: '100%',
        height: 120,
        padding: 2,
        alignItems: 'center',
        gap: 3
    },
    ImageContainer: {
        borderColor: '#ddaa',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: '85%',
        resizeMode: 'cover'
    },
    ButtonImage: {
        borderColor: '#ddaa',
        borderWidth: 1,
        width: '65%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#222',

    },
    textImage: {
        fontSize: 13,
        fontWeight: '500',
        color: '#eee',

    }

})