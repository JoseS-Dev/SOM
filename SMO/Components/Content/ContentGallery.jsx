import { View, Text, Image, TouchableHighlight, FlatList } from "react-native";
import { StylesGallery } from "../../Css/Gallery";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export function ContentGallery(){
    const [listImage, setListImage] = useState([]);

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
    return(
        <View style={StylesGallery.ContainerGallery}>
            <View style={StylesGallery.ContainerMain}>
                <View style={StylesGallery.ContainerGalleryHeader}>
                    <Text style={StylesGallery.TextGallery}>Galeria</Text>
                    <Image style={StylesGallery.ImageHeader} source={require('../../assets/Gallery/Gallery.png')}/>
                </View>
                <View style={StylesGallery.ContainerImages}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={listImage}
                        renderItem = {({item}) => (
                                <View style={StylesGallery.ContainerImage}>
                                    <Image style={StylesGallery.ImageContainer} source={{uri: item}}/>
                                    <TouchableHighlight style={StylesGallery.ButtonImage} onPress={() => {}}>
                                        <Text style={StylesGallery.textImage}>Ver Imagen</Text>
                                    </TouchableHighlight>
                                </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}