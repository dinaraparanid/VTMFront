import React, {useState} from "react";

import '../styles/common/home_screen/Converter.css'
import '../styles/pristina/home_screen/Converter.css'
import '../styles/serif/home_screen/Converter.css'

import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";
import {downloadFile} from "../api_client/Client";

enum OutputFormat { MP3 = 'MP3', MP4 = 'MP4', WAV = 'WAV', AAC = 'AAC' }

export default function Converter() {
    const { lang } = useLang()
    const [outputFormat, setOutputFormat] = useState(OutputFormat.MP3)
    const [url, setUrl] = useState("")
    const pasteUrl = lang === Language.RUSSIAN ? 'paste-url-serif' : 'paste-url-pristina';

    return (
        <div className='converter'>
            <p className={pasteUrl}>{Localisation.PasteUrlLinkHere(lang)}</p>
            <div className='row'>
                <input
                    className='input'
                    type='text'
                    placeholder={Localisation.YourUrlLinkVideo(lang)}
                    onChange={event => setUrl(event.target.value)}
                />
                <button
                    className='download-button'
                    onClick={ () => downloadFile(url, outputFormat.toLowerCase())
                        .then(
                            resp => {
                                alert(`RESPONSE: ${resp.data}`)
                                setUrl(resp.statusText)
                            },
                            reason => alert(reason)
                        )
                        .catch(console.log)
                    }
                >{Localisation.Download(lang)}</button>
            </div>
            <div className='formats'>
                <button
                    className='mp3-format'
                    onClick={() => setOutputFormat(OutputFormat.MP3)}
                >MP3</button> {
                [OutputFormat.MP4, OutputFormat.WAV, OutputFormat.AAC].map(format =>
                    (<button
                        className='format'
                        onClick={() => setOutputFormat(format)}
                    >{format}</button>))
            }</div>
        </div>
    )
}