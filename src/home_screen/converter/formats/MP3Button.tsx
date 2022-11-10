import React from "react";

import '../../../styles/common/home_screen/converter/Converter.css'

import {useOutputFormat} from "../../../utils/output_format/OutputFormatProvider";
import {OutputFormat} from "../../../utils/output_format/OutputFormat";

export default function MP3Button() {
    const { setOutputFormat } = useOutputFormat()

    return <button
        className={'mp3-format'}
        onClick={() => setOutputFormat(OutputFormat.MP3)}
    >MP3</button>
}