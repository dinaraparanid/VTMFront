import {initializeApp} from "firebase/app";
import firebaseConfig from './firebase_data.json'
import {User} from "../utils/user_provider/User";
import {Language} from "../utils/lang/Localisation";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    signInWithPopup,
    sendPasswordResetEmail,
    verifyPasswordResetCode as firebaseVPRC,
    confirmPasswordReset,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export function setAuthLang(lang: Language) {
    auth.languageCode = lang === Language.RUSSIAN ? 'ru' : 'en'
}

export function signUp(email: string, password: string, setUser: (user: User | null) => void) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async credentials => new User(
            credentials.user.uid,
            email,
            credentials.user.displayName,
            password,
            await credentials.user.getIdToken()
        ))
        .then(setUser)
        .catch(alert)
}

export function singIn(email: string, password: string, setUser: (user: User | null) => void) {
    signInWithEmailAndPassword(auth, email, password)
        .then(
            async credentials => new User(
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

export function signOut(setUser: (user: User | null) => void) {
    firebaseSignOut(auth)
        .then(() => setUser(null))
        .catch(alert)
}

export function signInWithGoogle(setUser: (user: User | null) => void) {
    signInWithPopup(auth, googleProvider)
        .then(
            async credentials => new User(
                credentials.user.uid,
                credentials.user.email!,
                credentials.user.displayName,
                null,
                await credentials.user.getIdToken()
            )
        )
        .then(setUser)
        .catch(alert)
}

export function sendForgetPasswordEmail(email: string) {
    sendPasswordResetEmail(auth, email).catch(alert)
}

export function verifyPasswordResetCode(code: string, password: string) {
    firebaseVPRC(auth, code)
        .then(() => confirmPasswordReset(auth, code, password))
        .catch(alert)
}