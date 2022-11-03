import React from 'react';

import './styles/common/AppBar.css'
import './styles/pristina/AppBar.css'
import './styles/serif/AppBar.css'

import './styles/common/home_screen/Lang.css'
import './styles/pristina/home_screen/Lang.css'
import './styles/serif/home_screen/Lang.css'

import {Language, Localisation} from './utils/lang/Localisation';
import {useLang} from "./utils/lang/LangProvider";
import {Link} from "react-router-dom";

function Menu() {
    const { lang, setLanguage } = useLang()
    const languages = ['Русский', 'English']
    const [screenButton, langButton, dropdown] = lang === Language.RUSSIAN ?
        ['screen-button-serif', 'lang-button-serif', 'dropdown-serif'] :
        ['screen-button-pristina', 'lang-button-pristina', 'dropdown-pristina']

    const Home = () => <Link to="/" className={screenButton}>{Localisation.Home(lang)}</Link>
    const FAQ = () => <Link to="faq" className={screenButton}>{Localisation.FAQ(lang)}</Link>
    const AboutApp = () => <Link to="about_app" className={screenButton}>{Localisation.AboutApp(lang)}</Link>

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

const Title = () => <Link to="/" className='title'>Video To Music Converter</Link>

export default function AppBar() {
    return (
        <nav className='app-bar'>
            <Title/>
            <Menu/>
        </nav>
    )
}