import {VideoInfo} from "../../../utils/data/VideoInfo";
import {Language} from "../../../utils/lang/Localisation";

export class ConverterHeaderProps {
    readonly videoInfo: VideoInfo | null
    readonly lang: Language

    constructor(videoInfo: VideoInfo | null, lang: Language) {
        this.videoInfo = videoInfo
        this.lang = lang
    }

    static equals = (self: ConverterHeaderProps, other: ConverterHeaderProps) =>
        VideoInfo.equals(self.videoInfo, other.videoInfo) &&
        self.lang === other.lang
}