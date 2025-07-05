import userModel from "../models/userModel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { use } from "react";

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

        //send token 
        res.json({
            success: true,
            token,
            user: { name: user.name }
        })


    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            msg: { error: error.msg }
        })

    }
};
