import React from "react";
import Home from "./Home";
import FAQ from "./FAQ";
import LangMenu from "./LangMenu";
import AboutApp from "./AboutApp";
import UserMenu from "./user_menu/UserMenu";

export default function Menu() {
    return (
        <nav className='menu'>
            <Home/>
            <FAQ/>
            <LangMenu/>
            <AboutApp/>
            <UserMenu/>
        </nav>
    )
}