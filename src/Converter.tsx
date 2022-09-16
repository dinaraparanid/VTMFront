import React, {useState} from "react";

import './styles/common/Converter.css'
import './styles/pristina/Converter.css'
import './styles/serif/Converter.css'

import {Language, Localisation} from "./utils/Localisation";

enum OutputFormat { MP3 = 'MP3', MP4 = 'MP4', WAV = 'WAV', AAC = 'AAC' }

export default function Converter({lang}: {lang: Language}) {
    const outputFormat = useState(OutputFormat.MP3)
    const pasteUrl = lang === Language.RUSSIAN ? 'paste-url-serif' : 'paste-url-pristina';

    return (
        <div className='converter'>
            <p className={pasteUrl}>{Localisation.PasteUrlLinkHere(lang)}</p>
            <div className='row'>
                <input className='input' type='text' placeholder={Localisation.YourUrlLinkVideo(lang)}/>
                <button
                    className='download-button'
                    onClick={() => console.log('TODO: Started downloading') }
                >{Localisation.Download(lang)}</button>
            </div>
            <div className='formats'>
                <button
                    className='mp3-format'
                    onClick={() => outputFormat[0] = OutputFormat.MP3}
                >MP3</button> {
                [OutputFormat.MP4, OutputFormat.WAV, OutputFormat.AAC].map(format =>
                    (<button
                        className='format'
                        onClick={() => outputFormat[0] = format}
                    >{format}</button>))
            }</div>
        </div>
    )
}