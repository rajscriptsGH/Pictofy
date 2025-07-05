import userModel from "../models/userModel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Checking for user details
        if (!name || !email || !password) {
            return res.json({
                success: false,
                msg: "Missing details"
            });
        }

        //hashing
        const salt = await bycrypt.genSalt(5);
        const hashPassword = await bycrypt.hash(password, salt);

        //store user in db
        const userData = {
            name,
            email,
            password: hashPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save();

        //generate token
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)





    } catch (error) { }
};
