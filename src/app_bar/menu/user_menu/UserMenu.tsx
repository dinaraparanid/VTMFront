import React, {lazy} from "react";
import {useUser} from "../../../utils/user_provider/UserProvider";

const Login = lazy(() => import('./Login'))
const User = lazy(() => import('./User'))

export default function UserMenu() {
    const { user } = useUser()
    return user ? <User/> : <Login/>
}