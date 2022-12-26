import React from "react";

import '../styles/common/message_screen/MessageScreen.css'
import '../styles/audiowide/message_screen/MessageScreen.css'
import '../styles/serif/message_screen/MessageScreen.css'

import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import AnimatedDiv from "../utils/animated/AnimatedDiv";
import {useLang} from "../utils/lang/LangProvider";
import {Language} from "../utils/lang/Localisation";

export default function MessageScreen({getMessage}: {getMessage: (lang: Language) => string}) {
    const { lang } = useLang()
    const text = lang === Language.RUSSIAN ? 'text-serif' : 'text-audiowide'

    return <AnimatedDiv className='not-found'>
        <h1 className={text} style={{fontSize: 26, width: '100%'}}>{getMessage(lang)}</h1>
    </AnimatedDiv>
}