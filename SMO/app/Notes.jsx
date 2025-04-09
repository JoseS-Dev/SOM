import { ContentNotes } from "../Components/Content/ContentNotes";
import { BarraIcon} from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function NotesScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentNotes/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}