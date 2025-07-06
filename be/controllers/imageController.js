import OpenAI from "openai";
import UserModel from "../models/userModel.js";

console.log("Environment check:", {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ? 'Found' : 'Not found',
    NODE_ENV: process.env.NODE_ENV
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

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

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024", 
            response_format: "b64_json" 
        });

        const imageData = response.data[0];

        if (!imageData || !imageData.b64_json) {
            return res.status(500).json({
                success: false,
                msg: "Failed to generate image",
            });
        }

        const imageBase64 = imageData.b64_json;

        user.credit -= 1;
        await user.save();

        res.json({
            success: true,
            image: `data:image/png;base64,${imageBase64}`,
            remainingCredits: user.credit,
            msg: "Image generated successfully",
        });
    } catch (error) {
        console.error("Image Controller Error:", error);

        if (error.status) {
            return res.status(error.status).json({
                success: false,
                msg: error.message || "OpenAI API Error",
            });
        }

        res.status(500).json({
            success: false,
            msg: "Internal Server Error while generating image",
        });
    }
};