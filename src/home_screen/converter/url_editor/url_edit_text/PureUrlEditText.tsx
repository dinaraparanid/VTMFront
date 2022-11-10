import React, {memo} from "react";
import {UrlEditTextProps} from "./UrlEditTextProps";
import UrlEditText from "./UrlEditText";

const PureUrlEditText = memo(({lang, onChange}: UrlEditTextProps) =>
        <UrlEditText lang={lang} onChange={onChange}/>,
    (oldUrlEditTextProps, newUrlEditTextProps) =>
        oldUrlEditTextProps.lang === newUrlEditTextProps.lang
)

export default PureUrlEditText