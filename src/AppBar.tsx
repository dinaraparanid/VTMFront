import React from 'react';

import './styles/common/AppBar.css'
import './styles/pristina/AppBar.css'
import './styles/serif/AppBar.css'

import './styles/common/Lang.css'
import './styles/pristina/Lang.css'
import './styles/serif/Lang.css'

import {Language, Localisation} from './utils/Localisation';

const Title = () => (<a href='home' className='title'><h2>Video To Music Converter</h2></a>)

function Menu({languages, lang, setLang}: {languages: Array<String>, lang: Language, setLang: (language: Language) => void}) {
    const [column, langButton] = lang === Language.RUSSIAN ?
        ['column-serif', 'lang-button-serif'] :
        ['column-pristina', 'lang-button-pristina'];

    return (
        <div className='menu'>
            <a href='home' className={column}>{Localisation.Home(lang)}</a>
            <a href='faq' className={column}>{Localisation.FAQ(lang)}</a>
            <div className='dropdown'>
                <button className={langButton}>{Localisation.Language(lang)}</button>
                <div className='dropdown-content'>
                    { languages.map((lang, index) => (<button
                        key={index}
                        onClick={ () => setLang(Localisation.toLanguage(index)) }
                        style={{color: '#ffab00'}}>{lang}</button>)) }
                </div>
            </div>
            <a href='about' className={column}>{Localisation.AboutApp(lang)}</a>
        </div>
    )
}

export default function AppBar({lang, setLang}: {lang: Language, setLang: (language: Language) => void}) {
    return (
        <div className='app-bar'>
            <Title/>
            <Menu languages={['Русский', 'English']} lang={lang} setLang={setLang}/>
        </div>
    )
}