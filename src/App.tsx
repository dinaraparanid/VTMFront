import React, {useState} from 'react';
import AppBar from "./AppBar";
import Converter from "./Converter";
import Description from "./Description";
import './styles/common/App.css'
import {Language} from "./utils/Localisation";

export default function App() {
    const [lang, setLang] = useState(Language.ENGLISH)

    return (
        <div className='App'>
            <AppBar lang={lang} setLang={setLang}/>
            <Converter lang={lang}/>
            <Description lang={lang}/>
        </div>
    )
}
