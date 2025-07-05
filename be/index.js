import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'

const PORT = process.env.PORT || 3300

const app = express()
app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user', userRouter)

app.post('/', (req, res) => {
    res.send("api working")
})


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);

})