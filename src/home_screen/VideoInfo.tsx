import React from "react";

import '../styles/common/home_screen/converter/VideoInfo.css'
import '../styles/pristina/home_screen/converter/VideoInfo.css'
import '../styles/serif/home_screen/converter/VideoInfo.css'

import {VideoInfo as VideoData} from "../utils/data/VideoInfo";
import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";

declare global {
    interface Number {
        div(other: number): number
        toTimeString(): string
        toStringIfNotZero(transform: (it: number) => string): string
    }
}

Number.prototype.div = function (this: number, other: number) {
    return Math.floor(this / other)
}

Number.prototype.toStringIfNotZero = function (this: number, transform: (it: number) => string) {
    return this === 0 ? '' : transform(this)
}

Number.prototype.toTimeString = function (this: number)  {
    let self = this;
    const hours = self.div(3600); self -= 3600 * hours
    const minutes = self.div(60); self -= 60 * minutes
    return `${hours.toStringIfNotZero(it => `${it}:`)}${minutes.toStringIfNotZero(it => `${it}:`)}${self}`;
};

export default function VideoInfo({videoInfo}: {videoInfo: VideoData}) {
    const { lang } = useLang()
    const videoTitle = lang === Language.RUSSIAN ? 'video-title-serif' : 'video-title-pristina';
    const durationTxt = lang === Language.RUSSIAN ? 'duration-serif' : 'duration-pristina';

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