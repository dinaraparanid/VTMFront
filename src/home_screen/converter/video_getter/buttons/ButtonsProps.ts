import {StartDownloadButtonProps} from "../../start_download_button/StartDownloadButtonProps";
import {NextButtonProps} from "./next_button/NextButtonProps";

export class ButtonsProps {
    readonly startDownloadButtonProps: StartDownloadButtonProps
    readonly nextButtonProps: NextButtonProps

    constructor(startDownloadButtonProps: StartDownloadButtonProps, nextButtonProps: NextButtonProps) {
        this.startDownloadButtonProps = startDownloadButtonProps
        this.nextButtonProps = nextButtonProps
    }

    static equals = (self: ButtonsProps, other: ButtonsProps) =>
        StartDownloadButtonProps.equals(self.startDownloadButtonProps, other.startDownloadButtonProps) &&
        NextButtonProps.equals(self.nextButtonProps, other.nextButtonProps)
}