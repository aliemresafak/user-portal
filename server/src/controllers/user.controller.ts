import { Request, Response} from "express"
import { User } from "../models/user"


const users = async (req: Request, res: Response) => {
    const users = await User.find({})
    return res.json({
        success: true,
        users
    })
}

const profile = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id)
        if(user){
            return res.json({
                success: true, 
                information: user
            })
        } 
    } catch (error) {
        return res.json({
            success: false,
            message: `${req.params.id} not found `
        })
    }
}

export {
    users,
    profile
}