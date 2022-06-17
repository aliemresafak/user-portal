export interface IUser{
    _id: string
    fullName: string,
    email: string,
    password: string,
    password2: string,
    lang: string,
    country: string
}

export interface RegisterUser{
    fullName: String,
    email: String,
    password: String,
    password2: String,
    lang: String,
    country: String
}

export interface LoginUser{
    email: String,
    password: String
}