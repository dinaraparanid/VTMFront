import React from 'react';
import AppBar from "./AppBar";
import './styles/common/App.css'
import {useCurrentScreen} from "./utils/current_screen/CurrentScreenProvider";
import HomeScreen from "./home_screen/HomeScreen";
import {FAQScreen} from "./faq_screen/FAQScreen";
import {AboutAppScreen} from "./about_app_screen/AboutAppScreen";
import {Screen} from "./utils/current_screen/Screen";
import VideoInfProvider from "./utils/data/VideoInfoProvider";

function CurrentScreen(currentScreen: Screen) {
    switch (currentScreen) {
        case Screen.HOME: return (<HomeScreen/>)
        case Screen.FAQ: return (<FAQScreen/>)
        case Screen.ABOUT_APP: return (<AboutAppScreen/>)
        default: throw Error('Unknown screen state')
    }
}

export default function App() {
    const { currentScreen } = useCurrentScreen()

    return (
        <div className='App'>
            <AppBar/>
            <VideoInfProvider>
                { CurrentScreen(currentScreen) }
            </VideoInfProvider>
        </div>
    )
}
