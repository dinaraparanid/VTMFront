import React from "react";

import '../../styles/common/AppBar.css'
import '../../styles/audiowide/AppBar.css'
import '../../styles/serif/AppBar.css'

import {useLang} from "../../utils/lang/LangProvider";
import {Language, Localisation} from "../../utils/lang/Localisation";
import {NavLink} from "react-router-dom";

export default function FAQ() {
    const { lang } = useLang()
    const screenButton = lang === Language.RUSSIAN ? 'screen-button-serif' : 'screen-button-audiowide'
    return <NavLink to="faq" className={screenButton}>{Localisation.FAQ(lang)}</NavLink>
}