import React, {useRef, useState} from "react";

import '../styles/common/home_screen/Converter.css'
import '../styles/pristina/home_screen/Converter.css'
import '../styles/serif/home_screen/Converter.css'

import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";
import {downloadFile, getVideoData} from "../api_client/Client";
import {useVideoInfo} from "../utils/data/VideoInfoProvider";
import VideoInfo from "./VideoInfo";

enum OutputFormat {
    MP3 = 'MP3',
    WAV = 'WAV',
    AAC = 'AAC',
    FLAC = 'FLAC',
    M4A = 'M4A',
    OPUS = 'OPUS',
    VORBIS = 'VORBIS'
}

export default function Converter() {
    const { lang } = useLang()
    const {videoInfo, setVideoInfo} = useVideoInfo()
    const [outputFormat, setOutputFormat] = useState(OutputFormat.MP3)

    const inputRef = useRef<HTMLInputElement>(null)
    const urlRef = useRef('')
    const [url, setUrl] = useState('')

    const pasteUrl = lang === Language.RUSSIAN ? 'paste-url-serif' : 'paste-url-pristina';
    const buttonTxt = videoInfo === null ? Localisation.Start(lang) : Localisation.Download(lang)

    return (
        <div className='converter'>
            <p className={pasteUrl}>{Localisation.PasteUrlLinkHere(lang)}</p>
            <div className='row'>
                <input
                    className='input'
                    ref={inputRef}
                    type='text'
                    placeholder={Localisation.YourUrlLinkVideo(lang)}
                    onChange={event => urlRef.current = event.target.value}
                />
                <div>
                    <button
                        className='converter-button'
                        onClick={ () => {
                            if (videoInfo !== null) {
                                downloadFile(url, outputFormat.toLowerCase())
                            } else {
                                setUrl(urlRef.current)
                                getVideoData(url)
                                    ?.then(
                                        resp => setVideoInfo(resp.data),
                                        reason => alert(reason)
                                    )
                                    .catch(console.log)
                            }
                        }}
                    >{buttonTxt}</button>
                    { videoInfo === null ? <div/> :
                        <button
                            className='converter-button'
                            onClick={ () => { setUrl(''); setVideoInfo(null) }}
                        >{Localisation.ConvertNext(lang)}</button>
                    }
                </div>
            </div>
            <div className='formats'>
                <button
                    className='mp3-format'
                    onClick={() => setOutputFormat(OutputFormat.MP3)}
                >MP3</button> {
                [
                    OutputFormat.WAV,
                    OutputFormat.AAC,
                    OutputFormat.FLAC,
                    OutputFormat.M4A,
                    OutputFormat.OPUS,
                    OutputFormat.VORBIS
                ].map(format =>
                    (<button
                        className='format'
                        onClick={() => setOutputFormat(format)}
                    >{format}</button>))
            }</div>
            {
                videoInfo === null ? <div/> : <VideoInfo
                    title={videoInfo!.title}
                    duration={videoInfo!.duration}
                    description={videoInfo!.description}
                    _filename={videoInfo!._filename}
                    thumbnail={videoInfo!.thumbnail}
                />
            }
        </div>
    )
}