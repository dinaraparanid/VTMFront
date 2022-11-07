import React from "react";

import '../styles/common/home_screen/Description.css'
import '../styles/audiowide/home_screen/Description.css'
import '../styles/serif/home_screen/Description.css'
import '../styles/audiowide/Text.css'
import '../styles/serif/Text.css'

import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";
import {motion} from "framer-motion";
import {Transition} from "../utils/Transition";

export default function Description() {
    const { lang } = useLang()
    const [howToUseIt, textClass, supportedSites] = lang === Language.RUSSIAN ?
        ['how-to-use-it-serif', 'text-serif', 'supported-sites-serif'] :
        ['how-to-use-it-audiowide', 'text-audiowide', 'supported-sites-audiowide']

    const DescriptionHeader = () => <div className={howToUseIt}>{Localisation.HowToUseIt(lang)}</div>
    const SupportedSites = () => <a href='https://ytdl-org.github.io/youtube-dl/supportedsites.html' className={supportedSites}><p>{Localisation.SupportedSites(lang)}</p></a>

    return (
        <motion.div className='description' {...Transition}>
            <DescriptionHeader/>
            {[
                Localisation.CopyTheUrlLinkToTheVideo(lang),
                Localisation.PasteTheCopiedLinkIntoTheInputField(lang),
                Localisation.ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting(lang),
                Localisation.EnjoyTheResultingTrack(lang)
            ].map((text, ind) => <p className={textClass}>{text}</p>)
            }
            <SupportedSites/>
        </motion.div>
    )
}