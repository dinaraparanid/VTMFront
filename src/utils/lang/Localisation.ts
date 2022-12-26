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
        lang === Language.RUSSIAN ? 'Как Пользоваться?' : 'How To Use It'

    public static readonly CopyTheUrlLinkToTheVideo = (lang: Language) =>
        lang === Language.RUSSIAN ?
            'Скопируйте URL ссылку на видео' :
            'Copy the URL link to the video'

    public static readonly PasteTheCopiedLinkIntoTheInputField = (lang: Language) =>
        lang === Language.RUSSIAN ?
            'Вставьте скопированную ссылку в поле для ввода' :
            'Paste the copied link into the input field'

    public static readonly ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting = (lang: Language) =>
        lang === Language.RUSSIAN ?
            'Нажмите на "Скачать" и дождитесь, пока видео обработается и скачается' :
            'Click on "Download" and wait for the video to be processed and finished converting'

    public static readonly EnjoyTheResultingTrack = (lang: Language) =>
        lang === Language.RUSSIAN ?
            'Наслаждайтесь получившимся треком!' :
            'Enjoy the resulting track!'

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
        lang === Language.RUSSIAN ? 'Готово к Конвертации' : 'Ready to Convert'

    public static readonly SignIn = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Войти' : 'Sign In'

    public static readonly SignUp = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Зарегистрироваться' : 'Sign Up'

    public static readonly SignOut = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Выйти' : 'Sign Out'

    public static readonly SignInToVTM = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Войти в VTM' : 'Sign in to VTM'

    public static readonly Email = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Электронная почта' : 'Email'

    public static readonly YourEmail = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Ваша электронная почта' : 'Your email'

    public static readonly Password = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Пароль' : 'Password'

    public static readonly YourPassword = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Ваш пароль' : 'Your password'

    public static readonly ForgetPassword = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Забыли пароль?' : 'Forget password?'

    public static readonly NotFound = (lang: Language) =>
        lang === Language.RUSSIAN ? 'Не найдено :(' : 'Not Found :('

    public static readonly TODO = 'TODO'

    public static readonly WordInProgress = (lang: Language) =>
        lang === Language.RUSSIAN ? 'В процессе...' : 'Work in progress...'
}