import React from "react";
import {Localisation} from "../../../../../utils/lang/Localisation";
import {NextButtonProps} from "./NextButtonProps";

export default function NextButton({lang, videoInfo, onClick}: NextButtonProps) {
    return <button
        className='next-button'
        style={{width: videoInfo === null ? '115px' : '300px'}}
        onClick={onClick}
    >{Localisation.Next(lang)}</button>
}