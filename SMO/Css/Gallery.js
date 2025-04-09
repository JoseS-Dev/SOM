import { StyleSheet } from "react-native";
export const StylesGallery = StyleSheet.create({
    ContainerGallery:{
        flex: 1,
        backgroundColor: '#111',
        padding: 5,
        alignItems: 'center'
    },
    ContainerGalleryHeader:{
        borderColor: '#fff',
        borderWidth: 2,
        width: '100%',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    TextGallery:{
        fontSize: 18,
        fontWeight: '500',
        color: '#eee',
        letterSpacing: 2
    }
})