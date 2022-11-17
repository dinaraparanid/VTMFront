import React from "react";

import '../../../styles/common/home_screen/Dropdown.css'
import '../../../styles/audiowide/home_screen/Dropdown.css'
import '../../../styles/serif/home_screen/Dropdown.css'

import {Language, Localisation} from "../../../utils/lang/Localisation";
import {useLang} from "../../../utils/lang/LangProvider";
import {useUser} from "../../../utils/user_provider/UserProvider";
import {signOut} from "../../../api_client/FirebaseClient";

export default function User() {
    const { user, setUser } = useUser()
    const { lang} = useLang()
    const [dropdownButton, dropdown] = lang === Language.RUSSIAN ?
        ['dropdown-button-serif', 'dropdown-serif'] :
        ['dropdown-button-audiowide', 'dropdown-audiowide']

    return <div className={dropdown}>
        <button className={dropdownButton}>{user!.email}</button>
        <div className='dropdown-content'>
            <button
                onClick={ () => signOut(setUser) }
                style={{color: '#ffab00'}}>{Localisation.SignOut(lang)}</button>
        </div>
    </div>
}