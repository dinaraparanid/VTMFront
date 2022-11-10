import React, {memo} from 'react';
import {StartDownloadButtonProps} from './StartDownloadButtonProps';
import StartDownloadButton from './StartDownloadButton'

const PureStartDownloadButton = memo(
    ({videoInfo, url, outputFormat, lang}: StartDownloadButtonProps) =>
        <StartDownloadButton videoInfo={videoInfo} url={url} outputFormat={outputFormat} lang={lang}/>,
    (oldStartDownloadButtonProps, newStartDownloadButtonProps) =>
        StartDownloadButtonProps.equals(oldStartDownloadButtonProps, newStartDownloadButtonProps)
)

export default PureStartDownloadButton