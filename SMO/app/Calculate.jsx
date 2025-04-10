import { ContentCalculate } from "../Components/Content/ContentCalculate"
import { BarraIcon } from "../Components/BarraIcon";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BatteryProvider } from "../Js/BatteryContext";

export default function CalculateScreen(){
   
    return(
        <SafeAreaProvider>
            <BatteryProvider>
                <BarraIcon/>
                <ContentCalculate/>
            </BatteryProvider>
        </SafeAreaProvider>
    )
}