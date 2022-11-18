import React from "react";

import '../../../styles/audiowide/AppBar.css'
import '../../../styles/serif/AppBar.css'

import {Language, Localisation} from "../../../utils/lang/Localisation";
import {useLang} from "../../../utils/lang/LangProvider";
import {NavLink} from "react-router-dom";

export default function Login() {
    const { lang } = useLang()
    const screenButton = lang === Language.RUSSIAN ? 'screen-button-serif' : 'screen-button-audiowide'
    return <NavLink to='login' className={screenButton}>{Localisation.SignIn(lang)}</NavLink>
}