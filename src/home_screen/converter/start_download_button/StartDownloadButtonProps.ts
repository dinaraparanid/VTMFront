import {VideoInfo} from "../../../utils/data/VideoInfo";
import {OutputFormat} from "../../../utils/output_format/OutputFormat";
import {Language} from "../../../utils/lang/Localisation";

export class StartDownloadButtonProps {
    readonly videoInfo: VideoInfo | null
    readonly url: string
    readonly outputFormat: OutputFormat
    readonly lang: Language

    constructor(
        videoInfo: VideoInfo | null,
        url: string,
        outputFormat: OutputFormat,
        lang: Language
    ) {
        this.videoInfo = videoInfo
        this.url = url
        this.outputFormat = outputFormat
        this.lang = lang
    }

    static equals = (self: StartDownloadButtonProps, other: StartDownloadButtonProps) =>
        VideoInfo.equals(self.videoInfo, other.videoInfo) &&
        self.url === other.url &&
        self.outputFormat === other.outputFormat &&
        self.lang === other.lang
}