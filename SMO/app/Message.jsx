import { ContentMessage } from "../Components/Content/ContentMessage"
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context"
export default function Message() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentMessage/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}