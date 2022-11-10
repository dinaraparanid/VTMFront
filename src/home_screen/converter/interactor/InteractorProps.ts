import {VideoInfo} from "../../../utils/data/VideoInfo";
import {UrlEditorProps} from "../url_editor/UrlEditorProps";
import {VideoGetterProps} from "../video_getter/VideoGetterProps";

export class InteractorProps {
    readonly videoInfo: VideoInfo | null
    readonly urlEditorProps: UrlEditorProps
    readonly videoGetterProps: VideoGetterProps

    constructor(videoInfo: VideoInfo | null, urlEditorProps: UrlEditorProps, videoGetterProps: VideoGetterProps) {
        this.videoInfo = videoInfo
        this.urlEditorProps = urlEditorProps
        this.videoGetterProps = videoGetterProps
    }

    static equals = (self: InteractorProps, other: InteractorProps) =>
        VideoInfo.equals(self.videoInfo, other.videoInfo) &&
        UrlEditorProps.equals(self.urlEditorProps, other.urlEditorProps) &&
        VideoGetterProps.equals(self.videoGetterProps, other.videoGetterProps)
}