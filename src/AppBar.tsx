import React from 'react';

import './styles/common/AppBar.css'
import './styles/pristina/AppBar.css'
import './styles/serif/AppBar.css'

import './styles/common/home_screen/Lang.css'
import './styles/pristina/home_screen/Lang.css'
import './styles/serif/home_screen/Lang.css'

import {Language, Localisation} from './utils/lang/Localisation';
import {useLang} from "./utils/lang/LangProvider";
import {useCurrentScreen} from "./utils/current_screen/CurrentScreenProvider";
import {Screen} from "./utils/current_screen/Screen";

function Title() {
    const { setCurrentScreen } = useCurrentScreen()
    return (<button
            onClick={() => setCurrentScreen(Screen.HOME)}
            className='title'>Video To Music Converter</button>
    )
}

function Menu() {
    const { lang, setLanguage } = useLang();
    const { setCurrentScreen } = useCurrentScreen()
    const languages = ['Русский', 'English'];
    const [screenButton, langButton] = lang === Language.RUSSIAN ?
        ['screen-button-serif', 'lang-button-serif'] :
        ['screen-button-pristina', 'lang-button-pristina'];

    return (
        <div className='menu'>
            <button
                onClick={() => setCurrentScreen(Screen.HOME)}
                className={screenButton}>{Localisation.Home(lang)}
            </button>
            <button
                onClick={() => setCurrentScreen(Screen.FAQ)}
                className={screenButton}>{Localisation.FAQ(lang)}
            </button>
            <div className='dropdown'>
                <button className={langButton}>{Localisation.Language(lang)}</button>
                <div className='dropdown-content'>
                    { languages.map((lang, index) => (<button
                        key={index}
                        onClick={ () => setLanguage(Localisation.toLanguage(index)) }
                        style={{color: '#ffab00'}}>{lang}</button>)) }
                </div>
            </div>
            <button
                onClick={() => setCurrentScreen(Screen.ABOUT_APP)}
                className={screenButton}>{Localisation.AboutApp(lang)}
            </button>
        </div>
    )
}

export default function AppBar() {
    return (
        <div className='app-bar'>
            <Title/>
            <Menu/>
        </div>
    )
}