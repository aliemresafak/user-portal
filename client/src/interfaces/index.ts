export interface IUser {
    _id: string,
    fullName: string,
    email: string,
    password: string,
    password2: string,
    lang: string,
    country: string
}

export interface ILoginUser{
    email: string
    password: string
}

export interface IRegisterUser{
    fullName: string,
    email: string,
    password: string,
    password2: string,
    lang: string,
    country: string
}