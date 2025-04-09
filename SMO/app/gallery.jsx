import { ContentGallery } from "../Components/Content/ContentGallery";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function GalleryScreen() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentGallery/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}