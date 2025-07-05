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

       





    } catch (error) { }
};
