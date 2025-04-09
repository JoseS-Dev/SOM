import { FormMessage } from "../Components/FormMessage";
import { BarraIcon } from "../Components/BarraIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function FormMessageScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <FormMessage/>
        </SafeAreaProvider>
    )
}