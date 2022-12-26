import React, {useRef} from "react";

import "../styles/common/login_screen/LoginScreen.css"
import "../styles/audiowide/login_screen/LoginScreen.css"
import "../styles/serif/login_screen/LoginScreen.css"

import "../styles/audiowide/Text.css"
import "../styles/serif/Text.css"

import {useLang} from "../utils/lang/LangProvider";
import AnimatedDiv from "../utils/animated/AnimatedDiv";
import {Language, Localisation} from "../utils/lang/Localisation";
import TextEditor from "./TextEditor";
import {NavLink, useNavigate} from "react-router-dom";
import {signIn} from '../api_client/FirebaseClient'
import {useUser} from "../utils/user_provider/UserProvider";

export default function LoginScreen() {
    const { lang } = useLang()
    const { setUser } = useUser()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const loginHeader = lang === Language.RUSSIAN ? 'login-header-serif' : 'login-header-audiowide'
    const forgetPasswordClass = lang === Language.RUSSIAN ? 'forget-password-serif' : 'forget-password-audiowide'

    return <AnimatedDiv className='login'>
        <h1 className={loginHeader}>{Localisation.SignInToVTM(lang)}</h1>
        <TextEditor
            headerTxt={Localisation.Email(lang)}
            placeholder={Localisation.YourEmail(lang)}
            onChange={(event) => emailRef.current = event.target.value}
        />
        <TextEditor
            headerStyle={{marginTop: '30px'}}
            headerTxt={Localisation.Password(lang)}
            placeholder={Localisation.YourPassword(lang)}
            inputType='password'
            onChange={(event) => passwordRef.current = event.target.value}
        />
        <p className={forgetPasswordClass}>
            <NavLink
                to='password_reset'
                className={forgetPasswordClass}
            >{Localisation.ForgetPassword(lang)}</NavLink>
        </p>
        <div className='sign-buttons'>
            <button
                className='button'
                onClick={() => {
                    signIn(emailRef.current, passwordRef.current, setUser)
                        .then((u) => { if (u) navigate("/", { replace: true }) })
                }}
            >{Localisation.SignIn(lang)}</button>
            <NavLink style={{alignSelf: 'center'}} to='sign_up'>
                <button className='button'>{Localisation.SignUp(lang)}</button>
            </NavLink>
        </div>
    </AnimatedDiv>
}