import { StyleSheet } from "react-native";
export const StylesCalendar = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
    },
    ContainerCalendar:{
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
    },
    ContainerHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        width: '100%',
        height: '5%',
        paddingHorizontal: 5
    },
    TextHeader: {
        fontSize: 18,
        letterSpacing: 2,
        color: '#eee',
        fontWeight: '500'
    },
    ImageHeader: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    Calendar: {
        height: '65%',
        backgroundColor: 'transparent',
        width: '100%',
        
        
        
    }
})