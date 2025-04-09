import { ContentKeyBoard } from "../Components/Content/ContentKeyboard";
import { BarraIcon } from "../Components/BarraIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function KeyBoardCall() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentKeyBoard/>
        </SafeAreaProvider>
    );
}