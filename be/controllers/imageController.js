import axios from "axios";
import UserModel from "../models/userModel.js";

export const imageController = async (req, res) => {
    try {
        const { prompt } = req.body;
        const user = await UserModel.findById(req.userId);

        if (!req.userId || !prompt) {
            return res.status(400).json({ success: false, msg: "Missing prompt or userId" });
        }

        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }

        if (user.credit <= 0) {
            return res.status(403).json({ success: false, msg: "Insufficient credits" });
        }

        const response = await axios.post(
            'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2',
            {
                inputs: prompt,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
                    Accept: "application/json"
                },
            }
        );

        const data = response.data;

        if (data.error || data.detail) {
            return res.status(500).json({
                success: false,
                msg: data.error || data.detail || "Model busy or unavailable",
            });
        }

    
        const imageUrl = data[0]?.generated_image || data?.image || data?.url;

        if (!imageUrl) {
            return res.status(500).json({ success: false, msg: "No image URL returned" });
        }

        user.credit -= 1;
        await user.save();

        res.json({
            success: true,
            image: imageUrl,
            remainingCredits: user.credit,
            msg: "Image generated successfully"
        });

    } catch (error) {
        console.error("Image Controller Error:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            msg: error.response?.data?.error || "Internal Server Error",
        });
    }
};
