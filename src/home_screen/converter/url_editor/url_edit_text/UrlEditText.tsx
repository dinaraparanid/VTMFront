import React from "react";
import {Localisation} from "../../../../utils/lang/Localisation";
import {UrlEditTextProps} from "./UrlEditTextProps";

export default function UrlEditText({lang, onChange}: UrlEditTextProps) {
    return <input
        className='input'
        type='text'
        placeholder={Localisation.YourUrlLinkVideo(lang)}
        onChange={onChange}
    />
}