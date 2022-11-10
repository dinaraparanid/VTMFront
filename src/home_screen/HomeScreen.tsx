import React from "react";
import Converter from "./converter/Converter";
import Description from "./Description";
import {useVideoInfo} from "../utils/data/VideoInfoProvider";
import OutputFormatProvider from "../utils/output_format/OutputFormatProvider";

export default function HomeScreen() {
    const { videoInfo } = useVideoInfo()

    return (
        <div className='home-screen'>
            <OutputFormatProvider><Converter/></OutputFormatProvider>
            { videoInfo === null ? <Description/> : <></> }
        </div>
    )
}