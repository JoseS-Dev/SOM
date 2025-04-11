import {ContentStorage} from '../Components/Content/ContentStorage';
import { BarraIcon } from '../Components/BarraIcon';
import { BarraNav } from '../Components/BarraNav';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function StorageScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentStorage/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}