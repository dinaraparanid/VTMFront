import {memo} from "react";
import {ConverterHeaderProps} from "./ConverterHeaderProps";
import ConverterHeader from "./ConverterHeader";

const PureConverterHeader = memo(
    ({videoInfo, lang}: ConverterHeaderProps) =>
        <ConverterHeader videoInfo={videoInfo} lang={lang}/>,
        (oldConverterHeaderProps, newConverterHeaderProps) =>
            ConverterHeaderProps.equals(oldConverterHeaderProps, newConverterHeaderProps)
)

export default PureConverterHeader