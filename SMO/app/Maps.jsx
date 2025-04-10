import { ContentMaps } from "../Components/Content/ContentMaps";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function Maps() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentMaps/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}