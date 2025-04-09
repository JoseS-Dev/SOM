import {BarraIcon} from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ContentCalendar } from "../Components/Content/ContentCalendar";
export default function CalendarScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentCalendar/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}