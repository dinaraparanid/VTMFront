import React from "react";

import '../styles/common/home_screen/Description.css'
import '../styles/pristina/home_screen/Description.css'
import '../styles/serif/home_screen/Description.css'

import {Language, Localisation} from "../utils/lang/Localisation";
import {useLang} from "../utils/lang/LangProvider";

export default function Description() {
    const { lang } = useLang()
    const howToUseIt = lang === Language.RUSSIAN ? 'how-to-use-it-serif' : 'how-to-use-it-pristina'
    const textClass = lang === Language.RUSSIAN ? 'text-serif' : 'text-pristina'
    const supportedSites = lang === Language.RUSSIAN ? 'supported-sites-serif' : 'supported-sites-pristina'

    return (
        <div className='description'>
            <div className={howToUseIt}>{Localisation.HowToUseIt(lang)}</div>
            {[
                Localisation.CopyTheUrlLinkToTheVideo(lang),
                Localisation.PasteTheCopiedLinkIntoTheInputField(lang),
                Localisation.ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting(lang),
                Localisation.EnjoyTheResultingTrack(lang)
            ].map((text, ind) =>
                ind === 3 ? (<p className={textClass}>{text}</p>) : (<><p className={textClass}>{text}</p><p></p></>)
            )}
            <a href='https://ytdl-org.github.io/youtube-dl/supportedsites.html' className={supportedSites}><p>{Localisation.SupportedSites(lang)}</p></a>
        </div>
    )
}