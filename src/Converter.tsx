import React from "react";
import './styles/Converter.css'

const Converter = () => (
    <div className='Converter'>
        <p className='PasteUrl'>Paste URL link here</p>
        <div className='Row'>
            <input className='Input' type='text' placeholder='Your URL link video'/>
            <button className='DownloadButton'>Download</button>
        </div>
        <div className='Formats'>
            <button className='MP3Format'>MP3</button>
            { ['MP4', 'WAV', 'AAC'].map(format => (<button className='Format'>{format}</button>)) }
        </div>
    </div>
)

export default Converter;