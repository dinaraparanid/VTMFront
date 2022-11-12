import React from "react";
import {OutputFormat} from "../../../utils/output_format/OutputFormat";
import {Language} from "../../../utils/lang/Localisation";

export class StartDownloadButtonProps {
    readonly urlRef: React.MutableRefObject<string>
    readonly outputFormat: OutputFormat
    readonly lang: Language

    constructor(
        urlRef: React.MutableRefObject<string>,
        outputFormat: OutputFormat,
        lang: Language
    ) {
        this.urlRef = urlRef
        this.outputFormat = outputFormat
        this.lang = lang
    }

    static equals = (self: StartDownloadButtonProps, other: StartDownloadButtonProps) =>
        self.urlRef.current === other.urlRef.current &&
        self.outputFormat === other.outputFormat &&
        self.lang === other.lang
}