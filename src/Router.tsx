import React, {lazy, Suspense} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const HomeScreen = lazy(() => import("./home_screen/HomeScreen"))
const FAQScreen = lazy(() => import("./faq_screen/FAQScreen"))
const AboutAppScreen = lazy(() => import("./about_app_screen/AboutAppScreen"))

export default function Router() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Suspense>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element=<HomeScreen/>/>
                    <Route path="/faq" element=<FAQScreen/>/>
                    <Route path="/about_app" element=<AboutAppScreen/>/>
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}