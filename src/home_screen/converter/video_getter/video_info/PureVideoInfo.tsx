import React, {memo} from "react";
import {VideoInfoProps} from "./VideoInfoProps";
import VideoInfo from "./VideoInfo";

const PureVideoInfo = memo(
    ({videoInfo, lang}: VideoInfoProps) => <VideoInfo videoInfo={videoInfo} lang={lang}/>,
    (oldVideoInfoProps, newVideoInfoProps) =>
        VideoInfoProps.equals(oldVideoInfoProps, newVideoInfoProps)
)

export default PureVideoInfo