import {VideoInfo} from "../../../../utils/data/VideoInfo";
import {Language} from "../../../../utils/lang/Localisation";

export class VideoInfoProps {
    readonly videoInfo: VideoInfo
    readonly lang: Language

    constructor(videoInfo: VideoInfo, lang: Language) {
        this.videoInfo = videoInfo
        this.lang = lang
    }

    static equals = (self: VideoInfoProps, other: VideoInfoProps) =>
        VideoInfo.equals(self.videoInfo, other.videoInfo) &&
        self.lang === other.lang
}