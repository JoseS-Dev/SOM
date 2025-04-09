import { ContentCall } from "../Components/Content/ContentCall";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function CallScreen() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentCall/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}