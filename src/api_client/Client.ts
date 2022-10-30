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

export function downloadFile(url: string, extension: string) {
    if (url === '') {
        alert('URL is empty')
        return null;
    }

    return axios.get(`${API_URL}/convert_video?url=${url}&ext=${extension}`)
}