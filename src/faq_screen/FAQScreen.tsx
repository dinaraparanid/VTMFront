import React from "react";
import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";

import '../styles/common/faq_screen/FAQ.css'
import '../styles/pristina/faq_screen/FAQ.css'
import '../styles/serif/faq_screen/FAQ.css'

export function FAQScreen() {
    const { lang } = useLang()
    const [faqData, textClass] = lang === Language.RUSSIAN ?
        ['faq-data-serif', 'text-serif'] :
        ['faq-data-pristina', 'text-pristina']

    return (<div className='faq'>
            <div className={faqData}>{Localisation.FAQ(lang)}</div>
            {[
                'TODO: FAQ information'
            ].map((text, ind) =>
                // TODO: FAQ information
                ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
        </div>
    )
}