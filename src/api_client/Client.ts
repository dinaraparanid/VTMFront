import axios, {AxiosResponse} from "axios";

const API_URL = 'http://0.0.0.0:1337'

export function downloadFile(url: string, extension: string):  Promise<AxiosResponse> | null {
    if (url === '') {
        alert('URL is empty')
        return null;
    }

    return axios.get(`${API_URL}/convert_video?url=${url}&ext=${extension}`)
}