import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";

import '../styles/common/about_app_screen/AboutApp.css'
import '../styles/pristina/about_app_screen/AboutApp.css'
import '../styles/serif/about_app_screen/AboutApp.css'
import React from "react";

export function AboutAppScreen() {
    const { lang } = useLang()
    const aboutAppData = lang === Language.RUSSIAN ? 'about-app-data-serif' : 'about-app-data-pristina'
    const textClass = lang === Language.RUSSIAN ? 'text-serif' : 'text-pristina'

    return (
        <div className='about-app'>
            <div className={aboutAppData}>{Localisation.AboutApp(lang)}</div>
            {[
                'TODO: About App data'
            ].map((text, ind) =>
                ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
        </div>
    )
}