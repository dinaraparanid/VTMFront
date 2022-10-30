import React from "react";
import Converter from "./Converter";
import Description from "./Description";
import {useVideoInfo} from "../utils/data/VideoInfoProvider";

export default function HomeScreen() {
    const { videoInfo } = useVideoInfo()

    return (
        <div>
            <Converter/>
            { videoInfo === null ? <Description/> : <div/> }
        </div>
    )
}