import React from "react";

import '../styles/common/faq_screen/FAQ.css'
import '../styles/audiowide/faq_screen/FAQ.css'
import '../styles/serif/faq_screen/FAQ.css'
import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";
import {motion} from "framer-motion";
import {Transition} from "../utils/Transition";

export default function FAQScreen() {
    const { lang } = useLang()
    const [faqData, textClass] = lang === Language.RUSSIAN ?
        ['faq-data-serif', 'text-serif'] :
        ['faq-data-audiowide', 'text-audiowide']

    return (
        <motion.div className='faq' {...Transition}>
            <div className={faqData}>{Localisation.FAQ(lang)}</div>
            {[
                'TODO: FAQ information'
            ].map((text, ind) =>
                // TODO: FAQ information
                ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
        </motion.div>
    )
}