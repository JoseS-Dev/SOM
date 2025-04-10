import { useContext, createContext } from "react";
import { useBattery } from "./Battery";

const BatteryContext = createContext();

export const BatteryProvider = ({ children }) => {
    const batteryState = useBattery();

    return (
        <BatteryContext.Provider value={batteryState}>
            {children}
        </BatteryContext.Provider>
    );
};

export const useBatteryContext = () => {
    return useContext(BatteryContext);
};