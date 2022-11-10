import {UrlEditTextProps} from "./url_edit_text/UrlEditTextProps";
import {StartDownloadButtonProps} from "../start_download_button/StartDownloadButtonProps";

export class UrlEditorProps {
    readonly urlEditTextProps: UrlEditTextProps
    readonly startDownloadButton: StartDownloadButtonProps

    constructor(urlEditTextProps: UrlEditTextProps, startDownloadButton: StartDownloadButtonProps) {
        this.urlEditTextProps = urlEditTextProps
        this.startDownloadButton = startDownloadButton
    }

    static equals = (self: UrlEditorProps, other: UrlEditorProps) =>
        UrlEditTextProps.equals(self.urlEditTextProps, other.urlEditTextProps) &&
        StartDownloadButtonProps.equals(self.startDownloadButton, other.startDownloadButton)
}