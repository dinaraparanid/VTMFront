export class VideoInfo {
    title: string
    duration: number
    description: string
    _filename: string
    thumbnail: string

    constructor(title: string, duration: number, description: string, filename: string, thumbnail: string) {
        this.title = title
        this.duration = duration
        this.description = description
        this._filename = filename
        this.thumbnail = thumbnail
    }
}