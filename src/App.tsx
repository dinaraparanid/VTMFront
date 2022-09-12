import React from 'react';
import AppBar from "./AppBar";
import Converter from "./Converter";
import Description from "./Description";
import './styles/App.css'

const App = () => (
    <div className='App'>
        <AppBar/>
        <Converter/>
        <Description/>
    </div>
)

export default App;
