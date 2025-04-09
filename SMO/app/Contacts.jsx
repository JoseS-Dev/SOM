import { ContentContacts } from "../Components/Content/ContentContacts";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function ContactsCallScreen(){
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentContacts/>
            <BarraNav/>
        </SafeAreaProvider>
    );
}