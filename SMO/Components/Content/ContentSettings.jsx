import {View, Text, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { stylesSettings } from '../../Css/Settings';

export function ContentSettings(){
    return( 
        <View style={stylesSettings.ContainerSettings}>
            <View style={stylesSettings.ContainerMain}>
                <View style={stylesSettings.ContainerTitle}>
                    <Text style={stylesSettings.textTitle}>Configuraciones</Text>
                    <Image source={require('../../assets/Settings/Cof.png')} style={stylesSettings.ImageTitle}/>
                </View>
                <View style={stylesSettings.ContainerOptions}>
                    <View style={stylesSettings.ContainerImage}>
                        <Image style={stylesSettings.ImageContainer} source={require('../../assets/Foto.jpg')}/>
                        <Text style={stylesSettings.TextImage}>Hola, Jose que quieres hacer</Text>
                    </View>
                    <Link href='/Account' asChild>
                        <Pressable style={stylesSettings.ContainerPressable}>
                            <Text style={stylesSettings.textPressable}>Cuenta</Text>
                            <Image style={stylesSettings.ImagePressable} source={require('../../assets/Settings/Account.png')}/>
                        </Pressable>
                    </Link>
                    <Link href='/Storage' asChild>
                        <Pressable style={stylesSettings.ContainerPressable}>
                            <Text style={stylesSettings.textPressable}>Almacenamiento</Text>
                            <Image style={stylesSettings.ImagePressable} source={require('../../assets/Settings/Storage.png')}/>
                        </Pressable>
                    </Link>
                    <Link href='/Memory' asChild>
                        <Pressable style={stylesSettings.ContainerPressable}>
                            <Text style={stylesSettings.textPressable}>Memoria</Text>
                            <Image style={stylesSettings.ImagePressable} source={require('../../assets/Settings/Memory.png')}/>
                        </Pressable>
                    </Link>
                    <Link href='/Battery' asChild>
                        <Pressable style={stylesSettings.ContainerPressable}>
                            <Text style={stylesSettings.textPressable}>Bateria</Text>
                            <Image style={stylesSettings.ImagePressable} source={require('../../assets/Settings/Battery.png')}/>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    )
}