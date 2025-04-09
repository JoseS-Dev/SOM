import {ContentCamera} from '../Components/Content/ContentCamera';
import { BarraIcon } from '../Components/BarraIcon';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CameraScreen() {
    return (
        <SafeAreaProvider>
            <BarraIcon />
            <ContentCamera />
        </SafeAreaProvider>
    )
}