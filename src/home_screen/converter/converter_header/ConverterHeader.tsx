import React from "react";

import '../../../styles/audiowide/home_screen/converter/Converter.css'
import '../../../styles/serif/home_screen/converter/Converter.css'

import {Language, Localisation} from "../../../utils/lang/Localisation";
import {ConverterHeaderProps} from "./ConverterHeaderProps";

export default function ConverterHeader({videoInfo, lang}: ConverterHeaderProps) {
    const converterHeader = videoInfo === null ?
        (lang === Language.RUSSIAN ? 'paste-url-serif' : 'paste-url-audiowide') :
        (lang === Language.RUSSIAN ? 'ready-to-convert-serif' : 'ready-to-convert-audiowide');

    return <p className={converterHeader}>{
        videoInfo === null ?
            Localisation.PasteUrlLinkHere(lang) :
            Localisation.ReadyToConvert(lang)
    }</p>
}