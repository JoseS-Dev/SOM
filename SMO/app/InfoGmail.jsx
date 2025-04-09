import { StructureInfoGmail } from "../Components/Content/StructureInfoGmail";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function InfoGmail(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <StructureInfoGmail/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}