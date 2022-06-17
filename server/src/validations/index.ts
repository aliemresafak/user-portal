import Joi from "joi"
import { RegisterUser, LoginUser } from "../interfaces"


const passwordRegex = new RegExp('^[a-zA-Z0-9]{8,}$')


export function registerValidators(user: RegisterUser ){
    const schema = Joi.object({
        fullName: Joi.string().empty(),
        email: Joi.string().email(),
        password: Joi.string().pattern(passwordRegex),
        password2: Joi.ref("password"),
        lang: Joi.string(),
        country: Joi.string()

    })
    return schema.validate(user)
}

export function loginValidators(user: LoginUser){
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().pattern(passwordRegex)
    })

    return schema.validate(user)
}