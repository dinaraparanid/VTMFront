import React, {memo} from "react";
import {ButtonsProps} from "./ButtonsProps";
import Buttons from "./Buttons";

const PureButtons = memo(
    ({startDownloadButtonProps, nextButtonProps}: ButtonsProps) =>
        <Buttons startDownloadButtonProps={startDownloadButtonProps} nextButtonProps={nextButtonProps}/>,
        (oldButtonsProps, newButtonsProps) =>
            ButtonsProps.equals(oldButtonsProps, newButtonsProps)
)

export default PureButtons