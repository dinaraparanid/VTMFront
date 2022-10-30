export class VideoInfo {
    readonly title: string
    readonly duration: number
    readonly description: string
    readonly _filename: string
    readonly thumbnail: string

    constructor(title: string, duration: number, description: string, filename: string, thumbnail: string) {
        this.title = title
        this.duration = duration
        this.description = description
        this._filename = filename
        this.thumbnail = thumbnail
    }
}