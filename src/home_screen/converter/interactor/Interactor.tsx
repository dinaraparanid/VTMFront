import React, {lazy, Suspense} from "react";
import {AnimatePresence} from "framer-motion";
import {InteractorProps} from "./InteractorProps";

const PureUrlEditor = lazy(() => import('../url_editor/PureUrlEditor'))
const PureVideoGetter = lazy(() => import('../video_getter/PureVideoGetter'))

export default function Interactor(
    {
        videoInfo,
        urlEditorProps: {urlEditTextProps, startDownloadButton},
        videoGetterProps: {buttonProps, videoInfoProps}
    }: InteractorProps
) {
    return <AnimatePresence>
        <Suspense>
            {videoInfo === null ?
                <PureUrlEditor urlEditTextProps={urlEditTextProps} startDownloadButton={startDownloadButton}/> :
                <PureVideoGetter buttonProps={buttonProps} videoInfoProps={videoInfoProps}/>}
        </Suspense>
    </AnimatePresence>
}