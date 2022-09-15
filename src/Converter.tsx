import React, {useState} from "react";
import './styles/Converter.css'

enum OutputFormat { MP3 = 'MP3', MP4 = 'MP4', WAV = 'WAV', AAC = 'AAC' }

export default function Converter() {
    const outputFormat = useState(OutputFormat.MP3)

    return (
        <div className='Converter'>
            <p className='PasteUrl'>Paste URL link here</p>
            <div className='Row'>
                <input className='Input' type='text' placeholder='Your URL link'/>
                <button
                    className='DownloadButton'
                    onClick={() => console.log('TODO: Started downloading') }
                >Download</button>
            </div>
            <div className='Formats'>
                <button
                    className='MP3Format'
                    onClick={() => outputFormat[0] = OutputFormat.MP3}
                >MP3</button> {
                [OutputFormat.MP4, OutputFormat.WAV, OutputFormat.AAC].map(format =>
                    (<button
                        className='Format'
                        onClick={() => outputFormat[0] = format}
                    >{format}</button>))
            }</div>
        </div>
    )
}