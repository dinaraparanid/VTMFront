import React from 'react';

import './styles/common/App.css'

import AppBar from "./app_bar/AppBar";
import VideoInfProvider from "./utils/data/VideoInfoProvider";
import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import UserProvider from "./utils/user_provider/UserProvider";

export default function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <UserProvider>
                    <AppBar/>
                    <VideoInfProvider>
                        <Router/>
                    </VideoInfProvider>
                </UserProvider>
            </BrowserRouter>
        </div>
    )
}
