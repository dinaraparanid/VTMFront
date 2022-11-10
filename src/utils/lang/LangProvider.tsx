import React, {createContext, useContext, useState} from "react";
import {Language, Localisation} from "./Localisation";

const LangContext = createContext<{ lang: Language; setLanguage: (index: number) => void }>({
    lang: Language.ENGLISH, setLanguage() {}
})

export const useLang = () => useContext(LangContext)

export default function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState(Language.ENGLISH)
    const setLanguage = (index: number) => setLang(Localisation.toLanguage(index))
    return <LangContext.Provider value={{ lang, setLanguage }}>{children}</LangContext.Provider>
}