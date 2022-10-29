import React from "react";
import Converter from "./Converter";
import Description from "./Description";
import VideoInfProvider from "../utils/data/VideoInfoProvider";

export default function HomeScreen() {
    return (
        <div>
            <VideoInfProvider>
                <Converter/>
            </VideoInfProvider>
            <Description/>
        </div>
    )
}