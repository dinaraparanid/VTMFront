import React from "react";
import {VideoInfo as VideoData} from "../utils/data/VideoInfo";
import {Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";

declare global {
    interface Number {
        toTimeString(): string
        toStringIfNotZero(transform: (it: number) => string): string
    }
}

Number.prototype.toStringIfNotZero = function (this: number, transform: (it: number) => string) {
    return this === 0 ? '' : transform(this)
}

Number.prototype.toTimeString = function (this: number)  {
    let self = this;
    const hours = self / 3600; self -= 3600 * hours
    const minutes = self / 60; self -= 60 * minutes
    return `${hours.toStringIfNotZero(it => `${it} hours, `)}${minutes.toStringIfNotZero(it => `${it} minutes, `)}${self}`;
};

export default function VideoInfo(videoInfo: VideoData) {
    const { lang } = useLang()

    return <div>
        <img
            src = {videoInfo.thumbnail}
            alt={Localisation.Cover(lang)}
            width='600px'
            height='300px'
        />
        <h1>{videoInfo.title}</h1>
        <p>{videoInfo.duration.toTimeString()}</p>
    </div>
}