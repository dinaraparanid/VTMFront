import React from "react";
import {OutputFormat} from "../../../utils/output_format/OutputFormat";
import MP3Button from "./MP3Button";
import NextFormatButton from "./NextFormatButton";

export default function Formats() {
    return <div className='formats'>
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
}