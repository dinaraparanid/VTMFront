import React from "react";
import {ButtonsProps} from "./ButtonsProps";
import PureStartDownloadButton from "../../start_download_button/PureStartDownloadButton";
import PureNextButton from "./next_button/PureNextButton";

export default function Buttons(
    {
        startDownloadButtonProps: {urlRef, outputFormat},
        nextButtonProps: {lang, videoInfo, onClick}
    }: ButtonsProps
) {
    return <div className='button-column'>
        <PureStartDownloadButton
            urlRef={urlRef}
            outputFormat={outputFormat}
            lang={lang}
        />
        <PureNextButton lang={lang} videoInfo={videoInfo} onClick={onClick}/>
    </div>
}
