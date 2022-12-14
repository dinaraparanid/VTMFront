import React, {memo} from 'react';
import {StartDownloadButtonProps} from './StartDownloadButtonProps';
import StartDownloadButton from './StartDownloadButton'

const PureStartDownloadButton = memo(
    ({urlRef, outputFormat, lang}: StartDownloadButtonProps) =>
        <StartDownloadButton urlRef={urlRef} outputFormat={outputFormat} lang={lang}/>,
    (oldStartDownloadButtonProps, newStartDownloadButtonProps) =>
        StartDownloadButtonProps.equals(oldStartDownloadButtonProps, newStartDownloadButtonProps)
)

export default PureStartDownloadButton