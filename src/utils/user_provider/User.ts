export class User {
    readonly uid: string | null
    readonly email: string
    readonly login: string | null
    readonly password: string
    readonly token: string | null

    constructor(uid: string | null, email: string, login: string | null, password: string, token: string | null) {
        this.uid = uid
        this.email = email
        this.login = login
        this.password = password
        this.token = token
    }
}