import React, {lazy, Suspense} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const HomeScreen = lazy(() => import("./home_screen/HomeScreen"))
const FAQScreen = lazy(() => import("./faq_screen/FAQScreen"))
const AboutAppScreen = lazy(() => import("./about_app_screen/AboutAppScreen"))
const LoginScreen = lazy(() => import("./login_screen/LoginScreen"))
const SignUpScreen = lazy(() => import("./sign_up_screen/SignUpScreen"))
const NotFoundScreen = lazy(() => import("./not_found_screen/NotFoundScreen"))

export default function Router() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Suspense>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element=<HomeScreen/>/>
                    <Route path='/faq' element=<FAQScreen/>/>
                    <Route path='/about_app' element=<AboutAppScreen/>/>
                    <Route path='/login' element=<LoginScreen/>/>
                    <Route path='/login/sign_up' element=<SignUpScreen/>/>
                    <Route path='*' element=<NotFoundScreen/>/>
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}