import React, {useRef, useState} from "react";

import '../styles/common/home_screen/converter/Converter.css'
import '../styles/pristina/home_screen/converter/Converter.css'
import '../styles/serif/home_screen/converter/Converter.css'

import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";
import {downloadFile, getVideoData} from "../api_client/Client";
import {useVideoInfo} from "../utils/data/VideoInfoProvider";
import VideoInfo from "./VideoInfo";
import {AnimatePresence, motion} from "framer-motion";
import {Transition} from "../utils/Transition";

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
    const urlRef = useRef('')

    const converterHeader = videoInfo === null ?
        (lang === Language.RUSSIAN ? 'paste-url-serif' : 'paste-url-pristina') :
        (lang === Language.RUSSIAN ? 'ready-to-convert-serif' : 'ready-to-convert-pristina');

    const [buttonTxt, converterHeight] = videoInfo === null ?
        [Localisation.Start(lang), 200] :
        [Localisation.Download(lang), lang === Language.RUSSIAN ? 650 : 745]

    const ConverterHeader = () =>
        <p className={converterHeader}>{
            videoInfo === null ?
                Localisation.PasteUrlLinkHere(lang) :
                Localisation.ReadyToConvert(lang)
        }</p>

    const UrlEditText = () =>
        <input
            className='input'
            type='text'
            placeholder={Localisation.YourUrlLinkVideo(lang)}
            onChange={event => urlRef.current = event.target.value}
        />

    const StartDownloadButton = () =>
        <button
            className='download-button'
            style={{width: videoInfo === null ? '115px' : '300px', marginLeft: videoInfo === null ? '20px' : 0}}
            onClick={ () => {
                if (videoInfo !== null)
                    downloadFile(urlRef.current, videoInfo._filename, outputFormat.toLowerCase())
                else
                    getVideoData(urlRef.current)
                        ?.then(
                            resp => setVideoInfo(resp.data),
                            reason => alert(reason)
                        )
                        .catch(console.error)
            }}
        >{buttonTxt}</button>

    const NextButton = () =>
        <button
            className='next-button'
            style={{width: videoInfo === null ? '115px' : '300px'}}
            onClick={ () => { urlRef.current = ''; setVideoInfo(null) }}
        >{Localisation.Next(lang)}</button>

    const Buttons = () =>
        <div className='button-column'>
            <StartDownloadButton/>
            <NextButton/>
        </div>

    const UrlEditor = () =>
        <motion.div className='row' {...Transition}>
            <UrlEditText/>
            <StartDownloadButton/>
        </motion.div>

    const VideoGetter = () =>
        <motion.div {...Transition}>
            <Buttons/>
            <VideoInfo videoInfo={videoInfo!}/>
        </motion.div>

    const Interactor = () =>
        <AnimatePresence>
            {videoInfo === null ? <UrlEditor/> : <VideoGetter/>}
        </AnimatePresence>

    const MP3Button = () =>
        <button
            className='mp3-format'
            onClick={() => setOutputFormat(OutputFormat.MP3)}
        >MP3</button>

    const NextFormatButton = ({format}: {format: OutputFormat}) =>
        <button
            className='format'
            onClick={() => setOutputFormat(format)}
        >{format}</button>

    const Formats = () =>
        <div className='formats'>
            <MP3Button/> {
            [
                OutputFormat.WAV,
                OutputFormat.AAC,
                OutputFormat.FLAC,
                OutputFormat.M4A,
                OutputFormat.OPUS,
                OutputFormat.VORBIS
            ].map(format => <NextFormatButton format={format}/>)
        }</div>

    return (
        <motion.div
            className='converter'
            style={{height: converterHeight}}
            initial={{width: 0}}
            animate={{width: 'initial'}}
        >
            <ConverterHeader/>
            <Interactor/>
            <Formats/>
        </motion.div>
    )
}