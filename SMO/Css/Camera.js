import { StyleSheet } from "react-native";

export const stylesCamera = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Camera: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ContainerTop: {
        borderBottomColor: '#444',
        borderBottomWidth: 1,
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#222'

    },
    FlipButtonTop: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '30%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddaa',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#111'

    },
    FlipButtom: {
        width: '50%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddaa',
        borderWidth: 1,
        backgroundColor: '#111',
        borderRadius: 20,
    },
    ContainerFlip: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ContainerBottom: {
        borderTopColor: '#444',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222'
    },
    ImageCamera: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    textPhoto: {
        color: '#eee',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1
    }
})