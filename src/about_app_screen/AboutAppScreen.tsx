import React from "react";

import '../styles/common/about_app_screen/AboutApp.css'
import '../styles/audiowide/about_app_screen/AboutApp.css'
import '../styles/serif/about_app_screen/AboutApp.css'
import '../styles/audiowide/Text.css'

import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";
import {motion} from "framer-motion";
import {Transition} from "../utils/Transition";

export default function AboutAppScreen() {
    const { lang } = useLang()
    const [aboutAppData, textClass] = lang === Language.RUSSIAN ?
        ['about-app-data-serif', 'text-serif'] :
        ['about-app-data-audiowide', 'text-audiowide']

    return (
        <motion.div className='about-app' {...Transition}>
            <div className={aboutAppData}>{Localisation.AboutApp(lang)}</div>
            {[
                'TODO: About App data'
            ].map((text, ind) =>
                ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
        </motion.div>
    )
}