import { View, Text, Image, TouchableHighlight, FlatList, Modal } from "react-native";
import { StylesGallery } from "../../Css/Gallery";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export function ContentGallery(){
    const [listImage, setListImage] = useState([]);
    const[ModalVisible, setModalVisible] = useState(false);
    const [isImage, setIsImage] = useState('');

    // Cargar la lista de imagenes desde AsyncStorage
    const loadImages = async () => {
        try{
            const images = await AsyncStorage.getItem('Imagen');
            if(images !== null){
                setListImage(JSON.parse(images));
                console.log('Imagenes cargadas desde AsyncStorage', JSON.parse(images));
            }
        }
        catch(err){
            console.log('Error al cargar las imagenes', err);
        }
    }
    useEffect(() => {
        loadImages();
    }, []);

    // Ver la imagen como tal 
    const handlePress = (item) => {
        setIsImage(item);
        setModalVisible(true);
    }
    return(
        <View style={StylesGallery.ContainerGallery}>
            <View style={StylesGallery.ContainerMain}>
                <View style={StylesGallery.ContainerGalleryHeader}>
                    <Text style={StylesGallery.TextGallery}>Galeria</Text>
                    <Image style={StylesGallery.ImageHeader} source={require('../../assets/Gallery/Gallery.png')}/>
                </View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={listImage}
                    renderItem = {({item}) => (
                            <View style={StylesGallery.ContainerImage}>
                                <Image style={StylesGallery.ImageContainer} source={{uri: item}}/>
                                <TouchableHighlight style={StylesGallery.ButtonImage} onPress={() => {handlePress(item)}}>
                                    <Text style={StylesGallery.textImage}>Ver Imagen</Text>
                                </TouchableHighlight>
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                />
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={ModalVisible}
            >
                <View style={StylesGallery.ModalContainer}>
                    <View style={StylesGallery.ContainerModalImagen}>
                        <Image style={StylesGallery.ModalImage} source={{uri: isImage}}/>
                    </View>
                    <TouchableHighlight style={StylesGallery.ModalButton} onPress={() => setModalVisible(false)}>
                        <Text style={StylesGallery.ModalText}>Cerrar</Text>
                    </TouchableHighlight> 
                </View>
            </Modal>
        </View>
    )
}