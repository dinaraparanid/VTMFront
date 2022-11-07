import React from 'react';

import './styles/common/AppBar.css'
import './styles/audiowide/AppBar.css'
import './styles/serif/AppBar.css'

import './styles/common/home_screen/Lang.css'
import './styles/audiowide/home_screen/Lang.css'
import './styles/serif/home_screen/Lang.css'

import {Language, Localisation} from './utils/lang/Localisation';
import {useLang} from "./utils/lang/LangProvider";
import {NavLink} from "react-router-dom";

function Menu() {
    const { lang, setLanguage } = useLang()
    const languages = ['Русский', 'English']
    const [screenButton, langButton, dropdown] = lang === Language.RUSSIAN ?
        ['screen-button-serif', 'lang-button-serif', 'dropdown-serif'] :
        ['screen-button-audiowide', 'lang-button-audiowide', 'dropdown-audiowide']

    const Home = () => <NavLink to="/" className={screenButton}>{Localisation.Home(lang)}</NavLink>
    const FAQ = () => <NavLink to="faq" className={screenButton}>{Localisation.FAQ(lang)}</NavLink>
    const AboutApp = () => <NavLink to="about_app" className={screenButton}>{Localisation.AboutApp(lang)}</NavLink>

    const LangMenu = () => <div className={dropdown}>
        <button className={langButton}>{Localisation.Language(lang)}</button>
        <div className='dropdown-content'>
            { languages.map((lang, index) => (<button
                key={index}
                onClick={ () => setLanguage(Localisation.toLanguage(index)) }
                style={{color: '#ffab00'}}>{lang}</button>)) }
        </div>
    </div>

    return (
        <nav className='menu'>
            <Home/>
            <FAQ/>
            <LangMenu/>
            <AboutApp/>
        </nav>
    )
}

const Title = () => <NavLink to="/" className='title'>Video To Music Converter</NavLink>

export default function AppBar() {
    return (
        <nav className='app-bar'>
            <Title/>
            <Menu/>
        </nav>
    )
}