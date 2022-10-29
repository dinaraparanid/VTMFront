import React, {createContext, ReactElement, useContext, useState} from "react";
import {VideoInfo} from "./VideoInfo";

const VideoInfoContext = createContext<{videoInfo: VideoInfo | null, setVideoInfo: (videoInfo: VideoInfo | null) => void}>({
    videoInfo: null, setVideoInfo() {}
})

export const useVideoInfo = () => useContext(VideoInfoContext)

export default function VideoInfProvider({ children }: { children: ReactElement | Array<ReactElement> }) {
    const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
    return (
        <VideoInfoContext.Provider value={{ videoInfo, setVideoInfo }}>
            {children}
        </VideoInfoContext.Provider>
    )
}