import React from 'react';
import './styles/AppBar.css'
import './styles/Lang.css'
import {Localisation, toLanguage} from "./utils/Localisation";

const Title = () => (<a href='home' className="Title"><h2>Video To Music Converter</h2></a>)

const Menu = ({languages}: {languages: Array<String>}) => (
    <div className='Menu'>
        <a href='home' className='Column'>Home</a>
        <a href='faq' className='Column'>FAQ</a>
        <div className='Dropdown'>
            <button className='LangButton'>Language</button>
            <div className='DropdownContent'>
                { languages.map((lang, index) => (<button
                    onClick={ () => Localisation.getInstance().setLang(toLanguage(index)) }
                    style={{color: '#ffab00'}}>{lang}</button>)) }
            </div>
        </div>
        <a href='about' className='Column'>About App</a>
    </div>
)

const AppBar = () => (
    <div className='AppBar'>
        <Title/>
        <Menu languages={['Русский', 'English']}/>
    </div>
)

export default AppBar;