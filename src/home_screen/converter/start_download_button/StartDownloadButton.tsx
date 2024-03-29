import React from "react";
import {downloadFile, getVideoData} from "../../../api_client/VTMClient";
import {StartDownloadButtonProps} from "./StartDownloadButtonProps";
import {useVideoInfo} from "../../../utils/data/VideoInfoProvider";
import {Localisation} from "../../../utils/lang/Localisation";
import {useUser} from "../../../utils/user_provider/UserProvider";

export default function StartDownloadButton({urlRef, outputFormat, lang}: StartDownloadButtonProps) {
    const { videoInfo, setVideoInfo } = useVideoInfo()
    const { user } = useUser()

    const buttonTxt = videoInfo === null ?
        Localisation.Start(lang) :
        Localisation.Download(lang)

    return <button
        className='download-button'
        style={{width: videoInfo === null ? '115px' : '300px', marginLeft: videoInfo === null ? '20px' : 0}}
        onClick={ () => {
            if (videoInfo !== null)
                downloadFile(
                    urlRef.current,
                    videoInfo.title,
                    outputFormat.toLowerCase(),
                    user?.token
                )?.catch(alert)
            else
                getVideoData(urlRef.current)
                    ?.then(
                        resp =>
                            resp.status === 200 ?
                                setVideoInfo(resp.data) :
                                alert(resp.data),
                        reason => alert(reason)
                    )
                    .catch(alert)
        }}
    >{buttonTxt}</button>
}