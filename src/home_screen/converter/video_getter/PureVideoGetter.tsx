import React, {memo} from "react";
import VideoGetter from "./VideoGetter";
import {VideoGetterProps} from "./VideoGetterProps";

const PureVideoGetter = memo(({buttonProps, videoInfoProps}: VideoGetterProps) =>
        <VideoGetter buttonProps={buttonProps} videoInfoProps={videoInfoProps}/>,
    (oldVideoInfoProps: VideoGetterProps, newVideoInfoProps: VideoGetterProps) =>
        VideoGetterProps.equals(oldVideoInfoProps, newVideoInfoProps)
)

export default PureVideoGetter