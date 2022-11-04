import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HomeScreen from "./home_screen/HomeScreen";
import {FAQScreen} from "./faq_screen/FAQScreen";
import {AboutAppScreen} from "./about_app_screen/AboutAppScreen";
import {AnimatePresence} from "framer-motion";

export default function Router() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element=<HomeScreen/>/>
                <Route path="/faq" element=<FAQScreen/>/>
                <Route path="/about_app" element=<AboutAppScreen/>/>
            </Routes>
        </AnimatePresence>
    )
}