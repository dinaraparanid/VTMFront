import ru from '../../lang/ru.json'
import en from '../../lang/en.json'

export enum Language { RUSSIAN, ENGLISH }

export class Localisation {
    public static toLanguage(index: number): Language {
        switch (index) {
            case 0: return Language.RUSSIAN
            case 1: return Language.ENGLISH
            default: throw Error(`Unknown language index: ${index}`)
        }
    }

    private static readonly langJson = (lang: Language) =>
        lang === Language.RUSSIAN ? ru : en

    public static readonly HowToUseIt = (lang: Language) =>
        Localisation.langJson(lang)["HowToUseIt"]

    public static readonly CopyTheUrlLinkToTheVideo = (lang: Language) =>
        Localisation.langJson(lang)["CopyTheUrlLinkToTheVideo"]

    public static readonly PasteTheCopiedLinkIntoTheInputField = (lang: Language) =>
        Localisation.langJson(lang)["PasteTheCopiedLinkIntoTheInputField"]

    public static readonly ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting = (lang: Language) =>
        Localisation.langJson(lang)["ClickOnDownloadAndWaitForTheVideoToBeProcessedAndFinishedConverting"]

    public static readonly EnjoyTheResultingTrack = (lang: Language) =>
        Localisation.langJson(lang)["EnjoyTheResultingTrack"]

    public static readonly PasteUrlLinkHere = (lang: Language) =>
        Localisation.langJson(lang)["PasteUrlLinkHere"]

    public static readonly YourUrlLinkVideo = (lang: Language) =>
        Localisation.langJson(lang)["YourUrlLinkVideo"]

    public static readonly Download = (lang: Language) =>
        Localisation.langJson(lang)["Download"]

    public static readonly Home = (lang: Language) =>
        Localisation.langJson(lang)["Home"]

    public static readonly FAQ = (lang: Language) =>
        Localisation.langJson(lang)["FAQ"]

    public static readonly Language = (lang: Language) =>
        Localisation.langJson(lang)["Language"]

    public static readonly AboutApp = (lang: Language) =>
        Localisation.langJson(lang)["AboutApp"]

    public static readonly Start = (lang: Language) =>
        Localisation.langJson(lang)["Start"]

    public static readonly Next = (lang: Language) =>
        Localisation.langJson(lang)["Next"]

    public static readonly Cover = (lang: Language) =>
        Localisation.langJson(lang)["Cover"]

    public static readonly Duration = (lang: Language) =>
        Localisation.langJson(lang)["Duration"]

    public static readonly ReadyToConvert = (lang: Language) =>
        Localisation.langJson(lang)["ReadyToConvert"]

    public static readonly SignIn = (lang: Language) =>
        Localisation.langJson(lang)["SignIn"]

    public static readonly SignUp = (lang: Language) =>
        Localisation.langJson(lang)["SignUp"]

    public static readonly SignOut = (lang: Language) =>
        Localisation.langJson(lang)["SignOut"]

    public static readonly SignInToVTM = (lang: Language) =>
        Localisation.langJson(lang)["SignInToVTM"]

    public static readonly Email = (lang: Language) =>
        Localisation.langJson(lang)["Email"]

    public static readonly YourEmail = (lang: Language) =>
        Localisation.langJson(lang)["YourEmail"]

    public static readonly Password = (lang: Language) =>
        Localisation.langJson(lang)["Password"]

    public static readonly YourPassword = (lang: Language) =>
        Localisation.langJson(lang)["YourPassword"]

    public static readonly ForgetPassword = (lang: Language) =>
        Localisation.langJson(lang)["ForgetPassword"]

    public static readonly NotFound = (lang: Language) =>
        Localisation.langJson(lang)["NotFound"]

    public static readonly WorkInProgress = (lang: Language) =>
        Localisation.langJson(lang)["WorkInProgress"]
}