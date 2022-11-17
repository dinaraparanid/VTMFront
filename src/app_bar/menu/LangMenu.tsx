import React from "react";

import '../../styles/common/AppBar.css'
import '../../styles/audiowide/AppBar.css'
import '../../styles/serif/AppBar.css'

import '../../styles/common/home_screen/Dropdown.css'
import '../../styles/audiowide/home_screen/Dropdown.css'
import '../../styles/serif/home_screen/Dropdown.css'

import {Language, Localisation} from "../../utils/lang/Localisation";
import {useLang} from "../../utils/lang/LangProvider";

export default function LangMenu() {
    const { lang, setLanguage } = useLang()
    const languages = ['Русский', 'English']
    const [dropdownButton, dropdown] = lang === Language.RUSSIAN ?
        ['dropdown-button-serif', 'dropdown-serif'] :
        ['dropdown-button-audiowide', 'dropdown-audiowide']

    return <div className={dropdown}>
        <button className={dropdownButton}>{Localisation.Language(lang)}</button>
        <div className='dropdown-content'>
            { languages.map((lang, index) => (<button
                key={index}
                onClick={ () => setLanguage(Localisation.toLanguage(index)) }
                style={{color: '#ffab00'}}>{lang}</button>)) }
        </div>
    </div>
}