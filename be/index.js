import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 3300

const app = express()
app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
    res.send("api working")
})


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);

})