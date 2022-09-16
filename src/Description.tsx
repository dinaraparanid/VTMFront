import React from "react";

import './styles/common/Description.css'
import './styles/pristina/Description.css'
import './styles/serif/Description.css'

import {Language, Localisation} from "./utils/Localisation";

export default function Description({lang}: {lang: Language}) {
    const howToUseIt = lang === Language.RUSSIAN ? 'how-to-use-it-serif' : 'how-to-use-it-pristina';
    const textClass = lang === Language.RUSSIAN ? 'text-serif' : 'text-pristina';
    const supportedSites = lang === Language.RUSSIAN ? 'supported-sites-serif' : 'supported-sites-pristina';

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