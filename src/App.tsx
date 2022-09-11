import React from 'react';
import AppBar from "./AppBar";
import './styles/App.css'

const App = () => (
    <div className='App'>
        <AppBar/>
        <div className='Content' style={{height: '100%'}}></div>
    </div>
)

export default App;
