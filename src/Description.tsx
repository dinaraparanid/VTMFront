import React from "react";
import './styles/Description.css'

export default function Description() {
    return (
        <div className='Description'>
            <div className='Header'>How To Use It?</div>
            {[
                '1. Copy the URL link to the video',
                '2. Paste the copied link into the input field',
                '3. Click on "Download" and wait for the video to be processed and finished converting',
                '4. Enjoy the resulting track!'
            ].map((text, ind) =>
                ind === 3 ? (<p className='Text'>{text}</p>) : (<><p className='Text'>{text}</p><p></p></>)
            )}
            <a href='https://ytdl-org.github.io/youtube-dl/supportedsites.html' className='Header'><p>Supported Sites</p></a>
        </div>
    )
}