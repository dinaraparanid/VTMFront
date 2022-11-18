import React from "react";

import '../styles/common/about_app_screen/AboutApp.css'
import '../styles/audiowide/about_app_screen/AboutApp.css'
import '../styles/serif/about_app_screen/AboutApp.css'

import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

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
            <h1 className={aboutAppData}>{Localisation.AboutApp(lang)}</h1>
            <ul style={{listStyleType: 'none'}}>
                {[
                    'TODO: About App data'
                ].map((text, ind) =>
                    ind === 0 ?
                        <li key={ind} className={textClass}>{text}</li> :
                        <><li key={ind} className={textClass}>{text}</li><></></>
                )}
            </ul>
        </AnimatedDiv>
    )
}