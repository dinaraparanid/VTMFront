enum Language { RUSSIAN, ENGLISH }

export function toLanguage(index: number) {
    switch (index) {
        case 0:
            return Language.RUSSIAN
        case 1:
            return Language.ENGLISH
        default:
            throw Error(`Unknown language index: ${index}`)
    }
}

export class Localisation {
    private static instance: Localisation | null

    public static getInstance() {
        if (this.instance === null)
            this.instance = new Localisation();

        return this.instance;
    }

    private lang = Language.ENGLISH

    public setLang(lang: Language) {
        this.lang = lang
    }

    public HowToUseIt() {
        return this.lang === Language.RUSSIAN ? 'Как Этим Пользоваться?' : 'How To Use It'
    }


    public CopyTheUrlLinkToTheVideo() {
        return this.lang == Language.RUSSIAN ?
            '1. Скопируйте URL ссылку на видео' :
            '1. Copy the URL link to the video'
    }

    public PasteTheCopiedLinkIntoTheInputField() {
        return this.lang == Language.RUSSIAN ?
            '2. Вставьте скопированную ссылку в поле для ввода' :
            '2. Paste the copied link into the input field'
    }

    public ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting() {
        return this.lang === Language.RUSSIAN ?
            '3. Нажмите на "Скачать" и дождитесь, пока видео обработается и скачается' :
            '3. Click on "Download" and wait for the video to be processed and finished converting'
    }

    public EnjoyTheResultingTrack() {
        return this.lang === Language.RUSSIAN ?
            '4. Наслаждайтесь получившимся треком!' :
            '4. Enjoy the resulting track!'
    }

    public SupportedSites() {
        return this.lang === Language.RUSSIAN ? 'Поддерживаемые сайты' : 'Supported Sites'
    }

    public PasteUrlLinkHere() {
        return this.lang === Language.RUSSIAN ? 'Вставьте URL ссылку сюда' : 'Paste URL link here'
    }

    public YourUrlLinkVideo() {
        return this.lang === Language.RUSSIAN ? 'Ваша URL ссылка' : 'Your URL link'
    }

    public Download() {
        return this.lang === Language.RUSSIAN ? 'Скачать' : 'Download'
    }

    public Home() {
        return this.lang === Language.RUSSIAN ? 'Домой' : 'Home'
    }

    public Language() {
        return this.lang === Language.RUSSIAN ? 'Язык' : 'Language'
    }

    public AboutApp() {
        return this.lang === Language.RUSSIAN ? 'О Приложении' : 'About App'
    }
}
