import axios from "axios";

const API_URL = 'http://0.0.0.0:1337'

export function downloadFile(url: string, extension: string) {
    return axios.get(`${API_URL}/convert_video?url=${url}&ext=${extension}`)
}