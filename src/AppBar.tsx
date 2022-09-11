import React from 'react';
import './styles/AppBar.css'
import './styles/Lang.css'

const Title = () => (<a href='home' className="Title"><h2>Video To Music Converter</h2></a>)

const Menu = ({languages}: {languages: Array<String>}) => (
    <div className='Menu'>
        <a href='home' className='Column'><p>Home</p></a>
        <a href='faq' className='Column'><p>FAQ</p></a>
        <div className='Dropdown'>
            <button className='LangButton'>Language</button>
            <div className='DropdownContent'>
                { languages.map(lang => (<a href='#' style={{color: '#ffab00'}}>{lang}</a>)) }
            </div>
        </div>
        <a href='about' className='Column'><p>About</p></a>
    </div>
)

const AppBar = () => (
    <div className='AppBar'>
        <Title/>
        <Menu languages={['English', 'Русский']}/>
    </div>
)

export default AppBar;