import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './firebase_data.json'
import {User} from "../utils/user_provider/User";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export function signUp(email: string, password: string, setUser: (user: User) => void) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (credentials) => new User(
            credentials.user.uid,
            email,
            credentials.user.displayName,
            password,
            await credentials.user.getIdToken()
        ))
        .then(setUser)
        .catch(alert)
}

export function singIn(email: string, password: string, setUser: (user: User) => void) {
    signInWithEmailAndPassword(auth, email, password)
        .then(
            async (credentials) => new User(
                credentials.user.uid,
                email,
                credentials.user.displayName,
                password,
                await credentials.user.getIdToken()
            )
        )
        .then(setUser)
        .catch(alert)
}