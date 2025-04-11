import {ContentAccount} from '../Components/Content/ContentAccount';
import { BarraIcon } from '../Components/BarraIcon';
import { BarraNav } from '../Components/BarraNav';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AccountScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentAccount/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}