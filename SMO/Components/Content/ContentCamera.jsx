import { Camera } from 'expo-camera';
import { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { stylesCamera } from '../../Css/Camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';

export function ContentCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [listImage, setListaImage] = useState([]); // Cambié el nombre a listImage para seguir la convención
    const [cameraRef, setCameraRef] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const images = await AsyncStorage.getItem('Imagen');
                if (images !== null) {
                    setListaImage(JSON.parse(images));
                }
            } catch (err) {
                console.log('Error al cargar las imágenes', err);
            }
        };
        loadImages();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Tomar la foto y guardarla en AsyncStorage
    const takePicture = async () => {
        try {
            if (cameraRef) {
                const data = await cameraRef.takePictureAsync();
                const updatedList = [...listImage, data.uri]; 
                setListaImage(updatedList);
                await AsyncStorage.setItem('Imagen', JSON.stringify(updatedList));
            }
        } catch (err) {
            console.log('Error al tomar la foto', err);
        }
    };

    return (
        <View style={stylesCamera.Container}>
            <Camera style={stylesCamera.Camera} type={type} ref={ref => setCameraRef(ref)}>
                <View style={stylesCamera.ContainerTop}>
                    <TouchableHighlight
                        style={stylesCamera.FlipButtonTop}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Image style={stylesCamera.ImageCamera} source={require('../../assets/Flip.png')} />
                    </TouchableHighlight>
                    <Link href='/gallery' asChild>
                        <TouchableHighlight style={stylesCamera.FlipButtonTop}>
                            <Image style={stylesCamera.ImageCamera} source={require('../../assets/Gallery/Gallery.png')} />
                        </TouchableHighlight>
                    </Link>
                </View>
                <View style={stylesCamera.ContainerBottom}>
                    <TouchableHighlight style={stylesCamera.FlipButtom} onPress={takePicture}>
                        <View style={stylesCamera.ContainerFlip}>
                            <Image style={stylesCamera.ImageCamera} source={require('../../assets/Camera.png')} />
                            <Text style={stylesCamera.textPhoto}>Tomar Foto</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </Camera>
        </View>
    );
}
