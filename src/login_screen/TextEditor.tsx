import React from "react";

import '../styles/common/login_screen/LoginScreen.css'

import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import AnimatedDiv from "../utils/animated/AnimatedDiv";
import {useLang} from "../utils/lang/LangProvider";
import {Language} from "../utils/lang/Localisation";

export default function TextEditor(
    { headerTxt, placeholder, onChange, headerStyle, inputType = 'text', inputStyle }: {
        headerTxt: string,
        placeholder: string,
        onChange: React.ChangeEventHandler<HTMLInputElement>,
        headerStyle?: React.CSSProperties | undefined,
        inputType?: React.HTMLInputTypeAttribute
        inputStyle?: React.CSSProperties | undefined,
    }
) {
    const { lang } = useLang()
    const textClass = lang === Language.RUSSIAN ? 'text-serif' : 'text-audiowide'

    return <AnimatedDiv>
        <h2 className={textClass} style={{
            marginLeft: '20px',
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: '10px',
            ...headerStyle
        }}>{headerTxt}</h2>
        <input
            className='input'
            type={inputType}
            placeholder={placeholder}
            style={{...inputStyle}}
            onChange={onChange}
        />
    </AnimatedDiv>
}