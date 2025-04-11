import {ContentMemory} from '../Components/Content/ContentMemory';
import { BarraIcon } from '../Components/BarraIcon';
import { BarraNav } from '../Components/BarraNav';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MemoryScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentMemory/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}