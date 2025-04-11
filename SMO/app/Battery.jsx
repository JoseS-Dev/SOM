import {ContentBattery} from '../Components/Content/ContentBattery';
import { BarraIcon } from '../Components/BarraIcon';
import { BarraNav } from '../Components/BarraNav';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function BatteryScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentBattery/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}