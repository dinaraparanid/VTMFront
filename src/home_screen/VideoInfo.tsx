import React from "react";

import '../styles/common/home_screen/converter/VideoInfo.css'
import '../styles/audiowide/home_screen/converter/VideoInfo.css'
import '../styles/serif/home_screen/converter/VideoInfo.css'

import {VideoInfo as VideoData} from "../utils/data/VideoInfo";
import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";

export default function VideoInfo({videoInfo}: {videoInfo: VideoData}) {
    const { lang } = useLang()
    const videoTitle = lang === Language.RUSSIAN ? 'video-title-serif' : 'video-title-audiowide';
    const durationTxt = lang === Language.RUSSIAN ? 'duration-serif' : 'duration-audiowide';

    return <div className='video-info'>
        <img
            className='cover'
            src = {videoInfo.thumbnail}
            alt={Localisation.Cover(lang)}
            width='600px'
            height='300px'
        />
        <h3 className={videoTitle}>{videoInfo.title}</h3>
        <p className={durationTxt}>{`${Localisation.Duration(lang)}: ${videoInfo.duration.toTimeString()}`}</p>
    </div>
}