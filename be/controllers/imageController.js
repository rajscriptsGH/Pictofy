import axios from "axios";
import UserModel from "../models/userModel.js";

export const imageController = async (req, res) => {
    try {
        const { prompt } = req.body;
        const user = await UserModel.findById(req.userId);

        if (!req.userId || !prompt) {
            return res.status(400).json({
                success: false,
                msg: "Missing prompt or userId",
            });
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found",
            });
        }

        if (user.credit <= 0) {
            return res.status(403).json({
                success: false,
                msg: "Insufficient credits",
            });
        }

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const imageBase64 = response.data?.[0];

        if (!imageBase64) {
            return res.status(500).json({
                success: false,
                msg: "Failed to receive valid image data",
            });
        }

        // Deduct credit
        user.credit -= 1;
        await user.save();

        res.json({
            success: true,
            image: `data:image/png;base64,${imageBase64}`,
            remainingCredits: user.credit,
            msg: "Image generated successfully",
        });

    } catch (error) {
        console.error("Image Controller Error:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            msg: "Failed to generate image. Check API key or server status.",
        });
    }
};
