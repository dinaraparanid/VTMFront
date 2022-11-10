import React, {memo} from "react";

import '../styles/common/faq_screen/FAQ.css'
import '../styles/audiowide/faq_screen/FAQ.css'
import '../styles/serif/faq_screen/FAQ.css'
import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import {useLang} from "../utils/lang/LangProvider";
import {Language, Localisation} from "../utils/lang/Localisation";
import AnimatedDiv from "../utils/animated/AnimatedDiv";

type FaqDivData = {faqData: string, textClass: string, lang: Language}

export default function FAQScreen() {
    const { lang } = useLang()
    const [faqData, textClass] = lang === Language.RUSSIAN ?
        ['faq-data-serif', 'text-serif'] :
        ['faq-data-audiowide', 'text-audiowide']

    const FaqDiv = ({faqData, textClass, lang}: FaqDivData) =>
        <AnimatedDiv className='faq'>
            <div className={faqData}>{Localisation.FAQ(lang)}</div>
            {[
                'TODO: FAQ information'
            ].map((text, ind) =>
                // TODO: FAQ information
                ind === 0 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
        </AnimatedDiv>

    const PureFaqDiv = memo(({faqData, textClass, lang}: FaqDivData) =>
        <FaqDiv faqData={faqData} textClass={textClass} lang={lang}/>,
        (oldData: FaqDivData, newData: FaqDivData) =>
            oldData.faqData === newData.faqData &&
            oldData.textClass === newData.textClass &&
            oldData.lang === newData.lang
    )

    return <PureFaqDiv faqData={faqData} textClass={textClass} lang={lang}/>
}