import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
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
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password, salt);
        // console.log(password);
        // console.log(hashPassword);


        //store user in db
        const userData = {
            name: name,
            email: email,
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


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({
                success: false,
                msg: "User not found"
            });
        }

        //match password
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET)

            return res.json({
                success: true,
                token,
                user: { name: user.name }
            })

        } else {
            return res.json({
                success: false,
                msg: "Wrong credential"
            });
        }

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            msg: error.msg
        })
    }
}

userCredits = async (req, res) => {

}
