import React from "react";
import AnimatedDiv from "../../../utils/animated/AnimatedDiv";
import {VideoGetterProps} from "./VideoGetterProps";
import PureButtons from "./buttons/PureButtons";
import PureVideoInfo from "./video_info/PureVideoInfo";

export default function VideoGetter(
    {
        buttonProps: {startDownloadButtonProps, nextButtonProps},
        videoInfoProps: {videoInfo, lang}
    }: VideoGetterProps
) {
    return <AnimatedDiv>
        <PureButtons startDownloadButtonProps={startDownloadButtonProps} nextButtonProps={nextButtonProps}/>
        <PureVideoInfo videoInfo={videoInfo} lang={lang}/>
    </AnimatedDiv>
}