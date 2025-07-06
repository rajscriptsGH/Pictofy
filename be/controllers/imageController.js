import fetch from 'node-fetch'
import UserModel from "../models/userModel";

export const imageController = async (req, res) => {
    try {
        const { prompt } = req.body;

        const user = await UserModel.findById(req.userId)

        if (!req.userId || !prompt) {
            return res.status(404).json({
                success: false,
                msg: "Missing prompt or userId",
            });
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        }

        //check user credit
        if (user.credit <= 0) {
            return res.status(403).json({
                success: false,
                msg: "Insufficient credits"
            })
        }

        const response = await fetch("https://api.replicate.com/v1/predictions", {
            method: "POST",
            headers: {
                Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                version: "db21e45e6d3f2ff1d6c2fbea016f6a2d7d8f2a0bb3aadb7b1e3aa9a24f2e9d64",
                input: {
                    prompt: prompt
                }
            })
        });

        const data = await response.json()
        if (data.error) {
            return res.status(500).json({ success: false, msg: data.error });
        }

        const imageURL = data?.urls?.get || null
        user.credit -= 1;
        await user.save();

        res.json({
            success: true,
            image: imageURL,
            remainingCredits: user.credit,
            msg: "Images generated"
        });

    } catch (error) {
        console.error("Image Controller Error:", error);

        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
}