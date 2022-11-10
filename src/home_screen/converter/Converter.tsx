import React, {useRef} from "react";

import '../../styles/common/home_screen/converter/Converter.css'

import {Language} from "../../utils/lang/Localisation";
import {useLang} from "../../utils/lang/LangProvider";
import {useVideoInfo} from "../../utils/data/VideoInfoProvider";
import AnimatedDiv from "../../utils/animated/AnimatedDiv";
import PureConverterHeader from "./converter_header/PureConverterHeader";
import PureInteractor from "./interactor/PureInteractor";
import {useOutputFormat} from "../../utils/output_format/OutputFormatProvider";
import Formats from "./formats/Formats";

export default function Converter() {
    const { lang } = useLang()
    const { videoInfo, setVideoInfo } = useVideoInfo()
    const { outputFormat } = useOutputFormat()
    const urlRef = useRef('')

    const converterHeight = videoInfo === null ?
        200 : (lang === Language.RUSSIAN ? 650 : 745)

    return (
        <AnimatedDiv
            className='converter'
            style={{height: converterHeight}}
            initial={{width: 0}}
            animate={{width: 'initial'}}
        >
            <PureConverterHeader videoInfo={videoInfo} lang={lang}/>
            <PureInteractor
                videoInfo={videoInfo}
                urlEditorProps={{
                    urlEditTextProps: {
                        lang: lang,
                        onChange: event => urlRef.current = event.target.value
                    },
                    startDownloadButton: {
                        videoInfo: videoInfo,
                        url: urlRef.current,
                        outputFormat: outputFormat,
                        lang: lang
                    },
                }}
                videoGetterProps={{
                    buttonProps: {
                        startDownloadButtonProps: {
                            videoInfo: videoInfo,
                            url: urlRef.current,
                            outputFormat: outputFormat,
                            lang: lang
                        },
                        nextButtonProps: {
                            lang: lang,
                            videoInfo: videoInfo,
                            onClick: () => { urlRef.current = ''; setVideoInfo(null) }
                        }
                    },
                    videoInfoProps: {
                        videoInfo: videoInfo!,
                        lang: lang
                    }
                }}
            />
            <Formats/>
        </AnimatedDiv>
    )
}