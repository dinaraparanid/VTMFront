import React from 'react';

import './styles/common/App.css'

import AppBar from "./AppBar";
import VideoInfProvider from "./utils/data/VideoInfoProvider";
import {BrowserRouter} from "react-router-dom";
import Router from "./Router";

export default function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <AppBar/>
                <VideoInfProvider>
                    <Router/>
                </VideoInfProvider>
            </BrowserRouter>
        </div>
    )
}
