import {memo} from "react";
import {NextButtonProps} from "./NextButtonProps";
import NextButton from "./NextButton";

const PureNextButton = memo(
    ({lang, videoInfo, onClick}: NextButtonProps) =>
        <NextButton lang={lang} videoInfo={videoInfo} onClick={onClick}/>,
    (oldNextButtonProps, newNextButtonProps) =>
        NextButtonProps.equals(oldNextButtonProps, newNextButtonProps)
)

export default PureNextButton