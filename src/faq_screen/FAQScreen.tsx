import React from "react";

import '../styles/common/faq_screen/FAQ.css'
import '../styles/audiowide/faq_screen/FAQ.css'
import '../styles/serif/faq_screen/FAQ.css'
import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";
import AnimatedDiv from "../utils/animated/AnimatedDiv";

export default function FAQScreen() {
    const { lang } = useLang()
    const [faqData, textClass] = lang === Language.RUSSIAN ?
        ['faq-data-serif', 'text-serif'] :
        ['faq-data-audiowide', 'text-audiowide']

    return <AnimatedDiv className='faq'>
        <div className={faqData}>{Localisation.FAQ(lang)}</div>
        {[
            'TODO: FAQ information'
        ].map((text, ind) =>
            // TODO: FAQ information
            ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
        )}
    </AnimatedDiv>
}