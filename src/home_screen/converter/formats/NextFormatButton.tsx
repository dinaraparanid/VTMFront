import React from "react";

import '../../../styles/common/home_screen/converter/Converter.css'

import {OutputFormat} from "../../../utils/output_format/OutputFormat";
import {useOutputFormat} from "../../../utils/output_format/OutputFormatProvider";

export default function NextFormatButton({format}: { format: OutputFormat }) {
    const { setOutputFormat } = useOutputFormat()

    return <button
        className='format'
        onClick={() => setOutputFormat(format) }
    >{format}</button>
}