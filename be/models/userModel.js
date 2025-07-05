import mongoose, { Schema } from "mongoose";


const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: Number, required: true },
    credit: { type: Number, default: 10 }
})

const UserModel = mongoose.models.user || mongoose.model('user', User)

export{
    UserModel
}