import {View, Text, Image} from 'react-native';
import { StylesMaps } from '../../Css/Maps';
import { MapView } from 'react-native-maps';

export function ContentMaps(){
    return(
        <View style={StylesMaps.ContainerMaps}>
            <View>
                <Text>Mapa</Text>
                <Image
            </View>
        </View>
    )
}