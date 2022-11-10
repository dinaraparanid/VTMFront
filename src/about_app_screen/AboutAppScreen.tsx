import React, {ReactElement} from "react";

import '../styles/common/about_app_screen/AboutApp.css'
import '../styles/audiowide/about_app_screen/AboutApp.css'
import '../styles/serif/about_app_screen/AboutApp.css'
import '../styles/audiowide/Text.css'

import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";
import AnimatedDiv from "../utils/animated/AnimatedDiv";

export default function AboutAppScreen() {
    const { lang } = useLang()
    const [aboutAppData, textClass] = lang === Language.RUSSIAN ?
        ['about-app-data-serif', 'text-serif'] :
        ['about-app-data-audiowide', 'text-audiowide']

    return (
        <AnimatedDiv className='about-app'>
            <div className={aboutAppData}>{Localisation.AboutApp(lang)}</div>
            {[
                'TODO: About App data'
            ].map((text, ind): ReactElement =>
                ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
        </AnimatedDiv>
    )
}