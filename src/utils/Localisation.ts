export enum Language { RUSSIAN, ENGLISH }

export class Localisation {
    public static toLanguage(index: number) {
        switch (index) {
            case 0:
                return Language.RUSSIAN
            case 1:
                return Language.ENGLISH
            default:
                throw Error(`Unknown language index: ${index}`)
        }
    }

    public static HowToUseIt(lang: Language) {
        return lang === Language.RUSSIAN ? 'Как Этим Пользоваться?' : 'How To Use It'
    }


    public static CopyTheUrlLinkToTheVideo(lang: Language) {
        return lang === Language.RUSSIAN ?
            '1. Скопируйте URL ссылку на видео' :
            '1. Copy the URL link to the video'
    }

    public static PasteTheCopiedLinkIntoTheInputField(lang: Language) {
        return lang === Language.RUSSIAN ?
            '2. Вставьте скопированную ссылку в поле для ввода' :
            '2. Paste the copied link into the input field'
    }

    public static ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting(lang: Language) {
        return lang === Language.RUSSIAN ?
            '3. Нажмите на "Скачать" и дождитесь, пока видео обработается и скачается' :
            '3. Click on "Download" and wait for the video to be processed and finished converting'
    }

    public static EnjoyTheResultingTrack(lang: Language) {
        return lang === Language.RUSSIAN ?
            '4. Наслаждайтесь получившимся треком!' :
            '4. Enjoy the resulting track!'
    }

    public static SupportedSites(lang: Language) {
        return lang === Language.RUSSIAN ? 'Поддерживаемые сайты' : 'Supported Sites'
    }

    public static PasteUrlLinkHere(lang: Language) {
        return lang === Language.RUSSIAN ? 'Вставьте URL ссылку сюда' : 'Paste URL link here'
    }

    public static YourUrlLinkVideo(lang: Language) {
        return lang === Language.RUSSIAN ? 'Ваша URL ссылка' : 'Your URL link'
    }

    public static Download(lang: Language) {
        return lang === Language.RUSSIAN ? 'Скачать' : 'Download'
    }

    public static Home(lang: Language) {
        return lang === Language.RUSSIAN ? 'Домой' : 'Home'
    }

    public static FAQ(lang: Language) {
        return lang === Language.RUSSIAN ? 'ЧаВо' : 'FAQ'
    }

    public static Language(lang: Language) {
        return lang === Language.RUSSIAN ? 'Язык' : 'Language'
    }

    public static AboutApp(lang: Language) {
        return lang === Language.RUSSIAN ? 'О Приложении' : 'About App'
    }
}
