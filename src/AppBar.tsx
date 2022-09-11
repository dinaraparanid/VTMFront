import React from 'react';
import './styles/AppBar.css'

const Title = () => (<div className='Title'><h2>Video To Music</h2></div>)

const Menu = () => (
    <div className='Menu'>
        <div className='FAQ'>FAQ</div>
        <div className='Lang'>English</div>
    </div>
)

const AppBar = () => (
    <div className='AppBar'>
        <Title/>
        <Menu/>
    </div>
)

export default AppBar;