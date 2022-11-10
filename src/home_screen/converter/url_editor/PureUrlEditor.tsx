import React, {memo} from "react";
import {UrlEditorProps} from "./UrlEditorProps";
import {UrlEditTextProps} from "./url_edit_text/UrlEditTextProps";
import {StartDownloadButtonProps} from "../start_download_button/StartDownloadButtonProps";
import UrlEditor from "./UrlEditor";

const PureUrlEditor = memo(
    ({urlEditTextProps, startDownloadButton}: UrlEditorProps) =>
        <UrlEditor urlEditTextProps={urlEditTextProps} startDownloadButton={startDownloadButton}/>,
    (oldUrlEditorProps, newUrlEditorProps) =>
        UrlEditTextProps.equals(oldUrlEditorProps.urlEditTextProps, newUrlEditorProps.urlEditTextProps) &&
        StartDownloadButtonProps.equals(oldUrlEditorProps.startDownloadButton, newUrlEditorProps.startDownloadButton)
)

export default PureUrlEditor