import React from "react";

import '../../styles/common/AppBar.css'
import '../../styles/audiowide/AppBar.css'
import '../../styles/serif/AppBar.css'

import {NavLink} from "react-router-dom";
import {Language, Localisation} from "../../utils/lang/Localisation";
import {useLang} from "../../utils/lang/LangProvider";

export default function Home() {
    const { lang } = useLang()
    const screenButton = lang === Language.RUSSIAN ? 'screen-button-serif' : 'screen-button-audiowide'
    return <NavLink to="/" className={screenButton}>{Localisation.Home(lang)}</NavLink>
}