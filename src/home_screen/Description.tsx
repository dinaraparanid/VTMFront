import React from "react";

import '../styles/common/home_screen/Description.css'
import '../styles/audiowide/home_screen/Description.css'
import '../styles/serif/home_screen/Description.css'

import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";
import AnimatedDiv from "../utils/animated/AnimatedDiv";

export default function Description() {
    const { lang } = useLang()
    const [howToUseIt, textClass] = lang === Language.RUSSIAN ?
        ['how-to-use-it-serif', 'text-serif'] :
        ['how-to-use-it-audiowide', 'text-audiowide']

    const DescriptionHeader = () => <div className={howToUseIt}>{Localisation.HowToUseIt(lang)}</div>

    return (
        <AnimatedDiv className='description'>
            <DescriptionHeader/>
            <ol style={{marginLeft: '20px'}}>
                {[
                    Localisation.CopyTheUrlLinkToTheVideo(lang),
                    Localisation.PasteTheCopiedLinkIntoTheInputField(lang),
                    Localisation.ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting(lang),
                    Localisation.EnjoyTheResultingTrack(lang)
                ].map((text, ind) => <li key={ind} className={textClass}>{text}</li>)
                }
            </ol>
        </AnimatedDiv>
    )
}