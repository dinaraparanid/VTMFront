import React, {createContext, useContext, useState} from "react";
import {OutputFormat} from "./OutputFormat";

const OutputFormatContext = createContext<{ outputFormat: OutputFormat, setOutputFormat: (format: OutputFormat) => void }>({
    outputFormat: OutputFormat.MP3, setOutputFormat() {}
})

export const useOutputFormat = () => useContext(OutputFormatContext)

export default function OutputFormatProvider({ children }: { children: React.ReactNode }) {
    const [outputFormat, setOutputFormat] = useState(OutputFormat.MP3)
    return <OutputFormatContext.Provider value={{outputFormat, setOutputFormat}}>{children}</OutputFormatContext.Provider>
}