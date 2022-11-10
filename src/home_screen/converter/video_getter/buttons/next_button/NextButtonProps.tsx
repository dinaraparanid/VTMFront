import React from "react";
import {VideoInfo} from "../../../../../utils/data/VideoInfo";
import {Language} from "../../../../../utils/lang/Localisation";

type OnClickCallback = React.MouseEventHandler<HTMLButtonElement>

export class NextButtonProps {
    readonly lang: Language
    readonly videoInfo: VideoInfo | null
    readonly onClick: OnClickCallback

    constructor(lang: Language, videoInfo: VideoInfo | null, onClick: OnClickCallback) {
        this.lang = lang
        this.videoInfo = videoInfo
        this.onClick = onClick
    }

    static equals = (self: NextButtonProps, other: NextButtonProps) =>
        self.lang === other.lang && VideoInfo.equals(self.videoInfo, self.videoInfo)
}