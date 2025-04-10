import { View, Text, Image, TouchableHighlight, Modal } from 'react-native';
import { StylesMaps } from '../../Css/Maps';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useState } from 'react';

export function ContentMaps() {
    const [region, setRegion] = useState({
        latitude: 10.215034998386905,
        longitude: -67.99463337287307,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const[source, setSource] = useState(null);
    const[destination, setDestination] = useState(null);
    const[isChoseeSource, setIsChoseeSource] = useState(false);
    const[isChoseeDestination, setIsChoseeDestination] = useState(false);
    const[modalVisible, setModalVisible] = useState(false);

    // Eventos para cambiar el estado de los marcadores
    const handlePress = (e) => {
        const { coordinate } = e.nativeEvent;
        if(isChoseeSource){
            setSource(coordinate);
            setIsChoseeSource(false);
        } else if(isChoseeDestination){
            setDestination(coordinate);
            setIsChoseeDestination(false);
        }
    }
    return (
        <View style={StylesMaps.ContainerMaps}>
            <View style={StylesMaps.ContainerMain}>
                <View style={StylesMaps.ContainerHeader}>
                    <Text style={StylesMaps.textHeader}>Mapa</Text>
                    <TouchableHighlight style={StylesMaps.ButtonHeader} onPress={() => setModalVisible(true)}>
                        <Text style={StylesMaps.TextButton} >Coordenadas</Text>
                    </TouchableHighlight>
                    <Image style={StylesMaps.Imagen} source={require('../../assets/Maps/Maps.png')} />
                </View>
            </View>
            <MapView
                style={StylesMaps.Map}
                region={region}
                onRegionChangeComplete={(region) => setRegion(region)}  
                onPress={handlePress}
                mapType='standard'
            >
                <Marker
                    coordinate={{ latitude: 10.215034998386905, longitude: -67.99463337287307 }}
                    title={"Ubicación Actual"}
                    description={"Descripción de la ubicación actual"}
                />
                {source && (
                    <Marker
                        coordinate={source}
                        pinColor='blue'
                    />
                )}
                {destination && (
                    <Marker
                        coordinate={destination}
                        pinColor='red'
                    />
                )}
                {source && destination && (
                    <Polyline
                        coordinates={[source, destination]}
                        strokeWidth={4}
                        strokeColor="blue"
                    />
                )}
            </MapView>
            <View style={StylesMaps.ContainerButtom}>
                <TouchableHighlight style={StylesMaps.Button} onPress={() => setIsChoseeSource(true)}>
                    <Text style={StylesMaps.TextButton}>Seleccionar un Origen</Text>
                </TouchableHighlight>
                <TouchableHighlight style={StylesMaps.Button} onPress={() => setIsChoseeDestination(true)}>
                    <Text style={StylesMaps.TextButton}>Seleccionar un destino</Text>
                </TouchableHighlight>
            </View>
            {modalVisible && (
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={StylesMaps.ModalContainer}>
                        <Text style={StylesMaps.ModalTitle}>Coordenadas</Text>
                        <Text style={StylesMaps.ModalText}>Origen:</Text>
                        <View style={StylesMaps.ModalTextContainer}>
                            <Text style={StylesMaps.ModalText}> {source ? `latitud: ${source.latitude}, Longitud: ${source.longitude}` : 'No seleccionado'}</Text>
                        </View>
                        <Text style={StylesMaps.ModalText}>Destino:</Text>
                        <View style={StylesMaps.ModalTextContainer}>
                            <Text style={StylesMaps.ModalText}> {destination ? `latitud: ${destination.latitude}, Longitud: ${destination.longitude}` : 'No seleccionado'}</Text>
                        </View>
                        <TouchableHighlight style={StylesMaps.ModalButton} onPress={() => setModalVisible(false)}>
                            <Text style={StylesMaps.ModalButtonText}>Cerrar</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            )}
        </View>
    );
}