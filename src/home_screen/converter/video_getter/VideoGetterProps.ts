import {ButtonsProps} from "./buttons/ButtonsProps";
import {VideoInfoProps} from "./video_info/VideoInfoProps";
import {VideoInfo} from "../../../utils/data/VideoInfo";

export class VideoGetterProps {
    readonly buttonProps: ButtonsProps
    readonly videoInfoProps: VideoInfoProps

    constructor(buttonProps: ButtonsProps, videoInfoProps: VideoInfoProps) {
        this.buttonProps = buttonProps
        this.videoInfoProps = videoInfoProps
    }

    static equals = (self: VideoGetterProps, other: VideoGetterProps) =>
        ButtonsProps.equals(self.buttonProps, other.buttonProps) &&
        VideoInfo.equals(self.videoInfoProps.videoInfo, other.videoInfoProps.videoInfo)
}