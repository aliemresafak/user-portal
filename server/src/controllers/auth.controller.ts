import { Request, Response } from "express"
import { User } from "../models/user"
import * as validators from "../validations"

const login = async (req: Request, res: Response) => {
    const { error } = validators.loginValidators(req.body)
    if(error){
        return res.status(400).send({ error: error })
    }
    const user = await User.findOne({ email: req.body.email, password: req.body.password })
    if(user == null){
        return res.json({
            success: false,
            message: "Please check your credentials"
        })
    }
    return res.json({
        success: true,
        user
    })
}

const register = async (req: Request, res: Response) => {
    const { error } = validators.registerValidators(req.body)
    if (error) {
        res.status(400).send({ error: error })
    } else {
        const isUserEmail = await User.findOne({ email: req.body.email })
        if (isUserEmail) {
            return res.json({
                success: false,
                message: "The email address registered"
            })
        }

        const user = new User(req.body)
        const result = await user.save()
        return res.json({
            success: true,
            user: result
        })
    }
}

export {
    login,
    register
}