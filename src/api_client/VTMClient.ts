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

export function downloadFile(
    videoUrl: string,
    fileName: string,
    extension: string,
    title: string | null = null,
    artist: string | null = null,
    album: string | null = null,
    numberInAlbum: number | null = null,
    coverUrl: string | null = null,
    authToken: string | null = null
) {
    if (videoUrl === '') {
        alert('URL is empty')
        return null;
    }

    const {request, params, headers} = authToken ? {
        request: 'convert_video_auth',
        params: `&title=${title}&artist=${artist}&album=${album}&numberInAlbum=${numberInAlbum}&coverUrl=${coverUrl}`,
        headers: { headers: { Authorization: `Bearer ${authToken}` } }
    } : {
        request: 'convert_video',
        params: '',
        headers: {}
    }

    const fileUrl = `${API_URL}/${request}?url=${videoUrl}&ext=${extension}${params}`

    return axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'blob',
        ...headers
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