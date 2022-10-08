import React, {createContext, ReactElement, useContext, useState} from "react";
import {Screen} from "./Screen";

const CurrentScreenContext = createContext<{ currentScreen: Screen, setCurrentScreen: (screen: Screen) => void }>({
    currentScreen: Screen.HOME, setCurrentScreen(screen) {}
});

export const useCurrentScreen = () => useContext(CurrentScreenContext);

export default function CurrentScreenProvider({ children }: { children: ReactElement | Array<ReactElement> }) {
    const [currentScreen, setCurrentScreen] = useState(Screen.HOME);
    return (
        <CurrentScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
            {children}
        </CurrentScreenContext.Provider>
    )
}