import React from 'react';

import '../styles/common/AppBar.css'

import Title from "./Title";
import Menu from "./menu/Menu";

export default function AppBar() {
    return (
        <nav className='app-bar'>
            <Title/>
            <Menu/>
        </nav>
    )
}