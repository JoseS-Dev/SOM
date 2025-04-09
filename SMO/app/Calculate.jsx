import { ContentCalculate } from "../Components/Content/ContentCalculate"
import { BarraIcon } from "../Components/BarraIcon";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CalculateScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentCalculate/>
        </SafeAreaProvider>
    )
}