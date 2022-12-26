import React from "react";

import '../../../styles/common/home_screen/converter/Converter.css'

import {useOutputFormat} from "../../../utils/output_format/OutputFormatProvider";
import {OutputFormat} from "../../../utils/output_format/OutputFormat";

export default function MP3Button() {
    const { outputFormat, setOutputFormat } = useOutputFormat()

    return <button
        className={outputFormat === OutputFormat.MP3 ? 'mp3-selected-format' : 'mp3-unselected-format'}
        onClick={() => setOutputFormat(OutputFormat.MP3)}
    >MP3</button>
}