import React from "react";

import '../../../styles/common/home_screen/converter/Converter.css'

import AnimatedDiv from "../../../utils/animated/AnimatedDiv";
import PureUrlEditText from "./url_edit_text/PureUrlEditText";
import {UrlEditorProps} from "./UrlEditorProps";
import PureStartDownloadButton from "../start_download_button/PureStartDownloadButton";

export default function UrlEditor(
    {
        urlEditTextProps: {lang, onChange},
        startDownloadButton: {videoInfo, url, outputFormat}
    }: UrlEditorProps
) {
    return <AnimatedDiv className='row'>
        <PureUrlEditText lang={lang} onChange={onChange}/>
        <PureStartDownloadButton videoInfo={videoInfo} url={url} lang={lang} outputFormat={outputFormat}/>
    </AnimatedDiv>
}