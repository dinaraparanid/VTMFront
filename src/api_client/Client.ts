import axios from "axios";
import {VideoInfo} from "../utils/data/VideoInfo";

const API_URL = 'http://0.0.0.0:1337'

export function getVideoData(url: string) {
    if (url === '') {
        alert('URL is empty')
        return null;
    }

    return axios.get<VideoInfo>(`${API_URL}/get_video?url=${url}`)
}

export function downloadFile(videoUrl: string, fileName: string, extension: string) {
    if (videoUrl === '') {
        alert('URL is empty')
        return null;
    }

    const fileUrl = `${API_URL}/convert_video?url=${videoUrl}&ext=${extension}`
    console.log(fileUrl)

    return axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'blob'
    }).then(response => {
        if (response.status !== 200) {
            alert(response.data)
        } else {
            const href = URL.createObjectURL(response.data)
            const link = document.createElement('a')
            link.href = href
            link.setAttribute('download', `${fileName}.${extension}`)

            document.body.appendChild(link)
            link.click()

            document.body.removeChild(link)
            URL.revokeObjectURL(href)
        }
    }).catch(alert)
}