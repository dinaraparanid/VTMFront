import React from "react";
import {Language} from "../../../../utils/lang/Localisation";

export class UrlEditTextProps {
    readonly lang: Language
    readonly onChange: React.ChangeEventHandler<HTMLInputElement>

    constructor(lang: Language, onChange: React.ChangeEventHandler<HTMLInputElement>) {
        this.lang = lang
        this.onChange = onChange
    }

    static equals = (self: UrlEditTextProps, other: UrlEditTextProps) =>
        self.lang === other.lang
}