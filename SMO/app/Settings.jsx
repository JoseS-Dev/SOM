import { ContentSettings } from "../Components/Content/ContentSettings";
import { BarraIcon } from '../Components/BarraIcon';
import { BarraNav } from '../Components/BarraNav';
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function Settings(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentSettings/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}