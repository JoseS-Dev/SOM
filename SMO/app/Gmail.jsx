import { ContentGmail } from "../Components/Content/ContentGmail";
import {BarraIcon} from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function GmailScreen() {
    return (
        <SafeAreaProvider>
            <BarraIcon />
            <ContentGmail />
            <BarraNav />
        </SafeAreaProvider>
    )
}