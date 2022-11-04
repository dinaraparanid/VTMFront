export enum Language { RUSSIAN, ENGLISH }

export class Localisation {
    public static toLanguage(index: number): Language {
        switch (index) {
            case 0:
                return Language.RUSSIAN
            case 1:
                return Language.ENGLISH
            default:
                throw Error(`Unknown language index: ${index}`)
        }
    }

    public static readonly HowToUseIt = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Как Этим Пользоваться?' : 'How To Use It'

    public static readonly CopyTheUrlLinkToTheVideo = (lang: Language) =>
        lang === Language.RUSSIAN ?
            '1. Скопируйте URL ссылку на видео' :
            '1. Copy the URL link to the video'

    public static readonly PasteTheCopiedLinkIntoTheInputField = (lang: Language) =>
        lang === Language.RUSSIAN ?
            '2. Вставьте скопированную ссылку в поле для ввода' :
            '2. Paste the copied link into the input field'

    public static readonly ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting = (lang: Language) =>
        lang === Language.RUSSIAN ?
            '3. Нажмите на "Скачать" и дождитесь, пока видео обработается и скачается' :
            '3. Click on "Download" and wait for the video to be processed and finished converting'

    public static readonly EnjoyTheResultingTrack = (lang: Language) =>
        lang === Language.RUSSIAN ?
            '4. Наслаждайтесь получившимся треком!' :
            '4. Enjoy the resulting track!'

    public static readonly SupportedSites = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Поддерживаемые сайты' : 'Supported Sites'

    public static readonly PasteUrlLinkHere = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Вставьте URL ссылку сюда' : 'Paste URL link here'

    public static readonly YourUrlLinkVideo = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Ваша URL ссылка' : 'Your URL link'

    public static readonly Download = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Скачать' : 'Download'

    public static readonly Home = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Домой' : 'Home'

    public static readonly FAQ = (lang: Language) =>
        lang === Language.RUSSIAN ? 'ЧаВо' : 'FAQ'

    public static readonly Language = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Язык' : 'Language'

    public static readonly AboutApp = (lang: Language) =>
        lang === Language.RUSSIAN ? 'О Приложении' : 'About App'

    public static readonly Start = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Старт' : 'Start'

    public static readonly Next = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Далее' : 'Next'

    public static readonly Cover = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Обложка' : 'Cover'

    public static readonly Duration = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Продолжительность' : 'Duration'

    public static readonly ReadyToConvert = (lang: Language) =>
        lang ===Language.RUSSIAN ? 'Готово к Конвертации' : 'Ready to Convert'
}