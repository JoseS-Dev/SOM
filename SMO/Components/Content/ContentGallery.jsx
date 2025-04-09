import { View, Text, Image } from "react-native";
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
            <View style={StylesGallery.ContainerGalleryHeader}>
                <Text style={StylesGallery.TextGallery}>Galeria</Text>
                <Image style={StylesGallery.ImageHeader}/>
            </View>
        </View>
    )
}