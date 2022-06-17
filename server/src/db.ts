import * as dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL!, () => console.log("connected successful"))
}

export {
    connectDb
}