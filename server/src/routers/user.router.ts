import { Router } from "express"
import { userController } from "../controllers"

const userRouter = Router()

userRouter.get("/", userController.users)
userRouter.get("/:id", userController.profile)


export default userRouter