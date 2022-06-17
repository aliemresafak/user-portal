import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, unique:true, required: true },
    password: { type: String, required: true, select: false },
    password2: { type: String, required: true, select: false },
    lang: { type: String, required: true },
    country: { type: String, required: true }
})

const User = mongoose.model("User", userSchema)


export { User }
