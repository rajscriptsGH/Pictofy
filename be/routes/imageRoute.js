import express from 'express'
import { imageController } from '../controllers/imageController.js'
import { userAuth } from '../middleware/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, imageController)


export default imageRouter;